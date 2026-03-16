Content-Relay Landing
This project is a public landing website representing a social media
scheduling platform inspired by Postiz.
The website exists to support developer API approval for:
- TikTok Content Posting API
- Instagram Graph API
- YouTube Data API
The site provides product information and legal pages required
for platform developer review.
Authentication and dashboard functionality are not implemented
on this site.
All login and application functionality redirects to an external
application domain.
Content-Relay is a lightweight social media scheduling platform
that allows creators and teams to schedule and publish content
across multiple social media platforms.
Supported platforms:
- TikTok
- Instagram
- YouTube
The platform allows users to plan posts in advance and automate
content publishing workflows.
The real application is hosted separately.
All login actions redirect to:
`${NEXT_PUBLIC_APP_URL}`
The project uses only one environment variable.
`NEXT_PUBLIC_APP_URL`
Example:
`NEXT_PUBLIC_APP_URL=https://app.content-relay.com`
This variable is used for:
- login redirects
- dashboard redirects
- CTA buttons
The project must deploy on:
AWS Amplify
Requirements:
- static hosting compatible
- no custom backend server
- Next.js static export
Required pages:
`/`
Landing page
`/terms`
Terms of Service
`/privacy`
Privacy Policy
The landing page must contain:
- Hero section
- Features section
- Supported platforms section
- How it works section
- Product explanation
- Footer with legal links
The site must include:
- Terms of Service
- Privacy Policy
These are required for developer API approval.
All CTA buttons must redirect to the external application.
Example:
`window.location.href = process.env.NEXT_PUBLIC_APP_URL`
Minimal SaaS style landing page.
Requirements:
- responsive
- mobile friendly
- clean design
- modern layout
Use:
TailwindCSS
Next.js
React
TailwindCSS
Deployment:
AWS Amplify
The project must build successfully with:
`npm install`
`npm run build`
Next.js must use static export.
