"use client";
import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
  vx: number;
  vy: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    // Vary the size of the dashes
    this.size = Math.random() * 4 + 2;
    // Vibrant colors for particles
    const colors = [
      "rgba(0, 240, 255, 0.9)",   // Electric Cyan
      "rgba(255, 0, 127, 0.9)",   // Neon Pink
      "rgba(157, 78, 221, 0.9)",  // Bright Purple
      "rgba(255, 170, 0, 0.9)",   // Neon Orange
      "rgba(57, 255, 20, 0.9)"    // Neon Green
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];

    // Initial random angle and speed for drifting
    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 0.5 + 0.2; // slow drift speed
    this.vx = Math.cos(this.angle) * this.speed;
    this.vy = Math.sin(this.angle) * this.speed;
  }

  update(mouseX: number, mouseY: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

    // Radius of interaction with mouse
    const maxDistance = 250;

    if (distanceToMouse < maxDistance && distanceToMouse > 0) {
      // Flow towards mouse (attraction) + swirl (tangential)
      const force = (maxDistance - distanceToMouse) / maxDistance;
      const angleToMouse = Math.atan2(dy, dx);

      // Target velocity towards mouse (gentle pull)
      const targetVx = Math.cos(angleToMouse) * force * 3.5;
      const targetVy = Math.sin(angleToMouse) * force * 3.5;

      // Swirl effect (perpendicular vector to create a flow around the mouse)
      const swirlVx = Math.cos(angleToMouse + Math.PI / 2) * force * 2.5;
      const swirlVy = Math.sin(angleToMouse + Math.PI / 2) * force * 2.5;

      this.vx += (targetVx + swirlVx - this.vx) * 0.06;
      this.vy += (targetVy + swirlVy - this.vy) * 0.06;

      // Point the dash in the direction of movement
      this.angle = Math.atan2(this.vy, this.vx);
    } else {
      // Normal wandering/drifting when mouse is far
      // Slowly return to normal speed
      const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (currentSpeed > this.speed) {
        this.vx *= 0.97;
        this.vy *= 0.97;
      }

      // Add a slight random wander to the angle
      this.angle += (Math.random() - 0.5) * 0.05;
      const targetVx = Math.cos(this.angle) * this.speed;
      const targetVy = Math.sin(this.angle) * this.speed;

      this.vx += (targetVx - this.vx) * 0.02;
      this.vy += (targetVy - this.vy) * 0.02;

      // Keep dash aligned with movement
      this.angle = Math.atan2(this.vy, this.vx);
    }

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around screen edges so they don't disappear forever
    if (this.x < -20) this.x = this.canvasWidth + 20;
    if (this.x > this.canvasWidth + 20) this.x = -20;
    if (this.y < -20) this.y = this.canvasHeight + 20;
    if (this.y > this.canvasHeight + 20) this.y = -20;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    // Draw a small dash/line
    ctx.moveTo(-this.size, 0);
    ctx.lineTo(this.size, 0);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.restore();
  }
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const init = () => {
      // Set canvas size to match the parent container
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles = [];
      // Adjust density based on screen size
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 4000);

      for (let i = 0; i < numberOfParticles; i++) {
        // Distribute particles in a spiral or random pattern, heavier on the right
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        // Add more probability for particles to be on the right side (like the screenshot)
        if (Math.random() > 0.3 || x > canvas.width / 2) {
          particles.push(new Particle(x, y, canvas.width, canvas.height));
        }
      }
    };

    const animate = () => {
      // Clear with a slight fade to create tiny trails
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse.x, mouse.y);
        particles[i].draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();

    // Attach to window for smooth tracking across the whole page
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
