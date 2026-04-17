'use client';

import { useState } from 'react';

export function useFileUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (f?: File) => {
    if (!f) return;

    setFile(f);
    setFileName(f.name);

    // ✅ Only preview images
    if (f.type.startsWith('image/')) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  return {
    file,
    preview,
    fileName,
    handleFile,
  };
}
