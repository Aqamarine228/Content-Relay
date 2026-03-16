export function getAppUrl(): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) {
    throw new Error('NEXT_PUBLIC_APP_URL is required. Copy .env.example and set the external app URL.');
  }
  return appUrl;
}
