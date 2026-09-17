const fs = require('fs');
const http = require('http');
const cheerio = require('cheerio');

// ANSI color codes for terminal
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m"
};

const BASE_URL = 'http://localhost:3000';

const PAGES_TO_CHECK = [
  '/',
  '/json-formatter',
  '/json-minifier',
  '/json-validator',
  '/json-tree-viewer',
  '/json-to-csv',
  '/json-to-sql',
  '/json-to-ts',
  '/json-to-xml',
  '/guides',
  '/about',
];

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url} (Status: ${res.statusCode})`));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => {
      reject(err);
    });
  });
}

function analyzePage(html, path) {
  const $ = cheerio.load(html);
  
  const title = $('title').text().trim();
  const description = $('meta[name="description"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  const h1 = $('h1').text().trim();
  const ogTitle = $('meta[property="og:title"]').attr('content') || '';
  const ogDesc = $('meta[property="og:description"]').attr('content') || '';
  
  let score = 100;
  const suggestions = [];

  // Title checks
  if (!title) {
    score -= 20;
    suggestions.push(`${colors.red}Missing <title> tag.${colors.reset}`);
  } else if (title.length < 30 || title.length > 60) {
    score -= 5;
    suggestions.push(`${colors.yellow}Title length (${title.length}) is sub-optimal (aim for 30-60 characters).${colors.reset}`);
  }

  // Description checks
  if (!description) {
    score -= 20;
    suggestions.push(`${colors.red}Missing <meta name="description">.${colors.reset}`);
  } else if (description.length < 100 || description.length > 160) {
    score -= 5;
    suggestions.push(`${colors.yellow}Description length (${description.length}) is sub-optimal (aim for 120-160 chars).${colors.reset}`);
  }

  // H1 checks
  if (!h1) {
    score -= 15;
    suggestions.push(`${colors.red}Missing <h1> tag. Every page should have exactly one H1.${colors.reset}`);
  } else if ($('h1').length > 1) {
    score -= 5;
    suggestions.push(`${colors.yellow}Multiple <h1> tags found. Best practice is one per page.${colors.reset}`);
  }

  // Canonical
  if (!canonical) {
    score -= 10;
    suggestions.push(`${colors.red}Missing canonical URL link.${colors.reset}`);
  }

  // OpenGraph
  if (!ogTitle || !ogDesc) {
    score -= 10;
    suggestions.push(`${colors.yellow}Missing OpenGraph tags (og:title / og:description) for social sharing.${colors.reset}`);
  }

  return { title, score, suggestions };
}

async function run() {
  console.log(`\n${colors.cyan}${colors.bold}🚀 JSON Toolkit SEO Checker 🚀${colors.reset}\n`);
  console.log(`Checking ${PAGES_TO_CHECK.length} pages at ${BASE_URL}...\n`);

  let totalScore = 0;
  let successfulPages = 0;

  for (const path of PAGES_TO_CHECK) {
    try {
      const url = `${BASE_URL}${path}`;
      const html = await fetchHtml(url);
      const result = analyzePage(html, path);
      
      let scoreColor = colors.green;
      if (result.score < 80) scoreColor = colors.yellow;
      if (result.score < 60) scoreColor = colors.red;

      console.log(`${colors.bold}${path}${colors.reset}`);
      console.log(`Title: ${result.title || 'N/A'}`);
      console.log(`Score: ${scoreColor}${result.score}/100${colors.reset}`);
      
      if (result.suggestions.length > 0) {
        console.log(`Suggestions:`);
        result.suggestions.forEach(s => console.log(`  - ${s}`));
      }
      console.log('-'.repeat(40));

      totalScore += result.score;
      successfulPages++;
    } catch (err) {
      console.log(`${colors.red}❌ Error checking ${path}: ${err.message}${colors.reset}\n${'-'.repeat(40)}`);
      // It might fail if the page is not found (404) or server is down.
      if (err.message.includes("ECONNREFUSED")) {
         console.log(`${colors.red}Is the local server running? Please start it with 'npm run dev' on port 3000.${colors.reset}`);
         process.exit(1);
      }
    }
  }

  if (successfulPages > 0) {
    const avgScore = Math.round(totalScore / successfulPages);
    let finalColor = colors.green;
    if (avgScore < 80) finalColor = colors.yellow;
    if (avgScore < 60) finalColor = colors.red;

    console.log(`\n${colors.bold}📊 FINAL REPORT 📊${colors.reset}`);
    console.log(`Average SEO Score: ${finalColor}${avgScore}/100${colors.reset}`);
    if (avgScore === 100) {
      console.log(`${colors.green}Excellent! Your project's basic SEO is fully optimized.${colors.reset}\n`);
    } else {
      console.log(`Please address the suggestions above to improve your SEO.\n`);
    }
  }
}

run();
