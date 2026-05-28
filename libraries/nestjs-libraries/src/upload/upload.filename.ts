export function normalizeUploadOriginalName(originalName?: string) {
  if (!originalName) {
    return '';
  }

  const decoded = Buffer.from(originalName, 'latin1').toString('utf8');
  if (decoded === originalName || decoded.includes('\uFFfd')) {
    return originalName;
  }
  return decoded;
}
