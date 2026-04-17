import imageCompression from "browser-image-compression";

export async function compressImage(file: File): Promise<File> {

  const options = {
  maxSizeMB: 1.5,
  maxWidthOrHeight: 2000,
  initialQuality: 0.9,
  useWebWorker: true,
};

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Image compression failed:", error);
    return file; // fallback to original
  }
}