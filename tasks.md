Create a Next.js project.
Requirements:
- Next.js 14
- TypeScript
- App router
- TailwindCSS
- Static export support
Files required:
package.json
next.config.js
tailwind.config.js
---
Configure Next.js to support static export.
Requirements:
next.config.js must include:
output: 'export'
The build must generate static files
compatible with AWS Amplify.
---
Create an environment variable configuration.
File:
.env.example
Contents:
NEXT_PUBLIC_APP_URL=https://app.example.com
All redirect logic must use this variable.
---
Create the landing page.
Route:
/
Sections required:
Hero
Features
Platforms
How It Works
About Product
Footer
CTA buttons must redirect to:
process.env.NEXT_PUBLIC_APP_URL
---
Create component:
components/hero.tsx
Content:
Title:
Schedule and Publish Social Media Content from One Dashboard
Subtitle:
Content-Relay helps creators schedule and publish content
across TikTok, Instagram and YouTube.
CTA button:
Start Scheduling
Redirect to:
NEXT_PUBLIC_APP_URL
---
Create component:
components/features.tsx
Features:
Multi Platform Publishing
Smart Scheduling
Media Management
Analytics
Each feature should have:
title
description
icon placeholder
---
Create component:
components/platforms.tsx
Platforms:
TikTok
Instagram
YouTube
Include simple platform icons or text labels.
---
Create component:
components/footer.tsx
Links required:
Terms of Service
Privacy Policy
Routes:
/terms
/privacy
---
Create route:
/terms
Include sections:
Acceptance of Terms
Platform Usage
API Integrations
User Responsibilities
Content Ownership
Liability Disclaimer
Mention integrations with:
TikTok
Instagram
YouTube
---
Create route:
/privacy
Sections required:
Data Collection
OAuth Tokens
Data Usage
Third Party APIs
Security
Mention integrations with:
TikTok API
Instagram Graph API
YouTube Data API
---
Add metadata to landing page.
Title:
Content-Relay — Social Media Scheduling Platform
Description:
Schedule posts to TikTok, Instagram and YouTube from one dashboard.
---
Create AWS Amplify build configuration.
File:
amplify.yml
Build steps:
npm install
npm run build
Artifacts directory:
out
---
Include:
Project description
Environment variable configuration
Deployment instructions
Example env:
NEXT_PUBLIC_APP_URL=https://app.content-relay.com
---
Ensure the project builds successfully.
Commands:
npm install
npm run build
The build must produce static output compatible
with AWS Amplify hosting.
---
Ensure all CTA buttons redirect to:
NEXT_PUBLIC_APP_URL
No login functionality should exist in this project.
