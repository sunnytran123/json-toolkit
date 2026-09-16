import { useCallback } from 'react';

export function useDownload() {
  const downloadFile = useCallback((content: string, filename: string, type: string = 'application/json') => {
    try {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Download failed', error);
      return false;
    }
  }, []);

  return { downloadFile };
}
