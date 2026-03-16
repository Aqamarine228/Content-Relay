function normalizeAppUrl(value: string): string {
  const trimmedValue = value.trim();
  if (!trimmedValue) {
    throw new Error('NEXT_PUBLIC_APP_URL is required. Copy .env.example and set the external app URL.');
  }
  const urlWithProtocol = /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`;
  try {
    return new URL(urlWithProtocol).toString();
  } catch {
    throw new Error('NEXT_PUBLIC_APP_URL must be a valid URL or domain.');
  }
}
export function getAppUrl(): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) {
    throw new Error('NEXT_PUBLIC_APP_URL is required. Copy .env.example and set the external app URL.');
  }
  return normalizeAppUrl(appUrl);
}
