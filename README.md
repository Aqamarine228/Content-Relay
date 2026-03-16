Content-Relay Landing is a public marketing and legal website for a social media scheduling platform inspired by Postiz. The site supports developer API approval for TikTok Content Posting API, Instagram Graph API, and YouTube Data API.
- Public landing page only
- Terms of Service and Privacy Policy routes
- No login or dashboard functionality in this repository
- All CTA actions redirect to the external application URL
Copy `.env.example` and set the external application URL:
```bash
NEXT_PUBLIC_APP_URL=https://app.content-relay.com
```
```bash
npm install
npm run dev
```
AWS Amplify can build and host the exported static site with:
```bash
npm install
npm run build
```
The generated static output is written to `out/`.
