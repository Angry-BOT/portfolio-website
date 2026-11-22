# Shailesh Das · Portfolio

Personal portfolio built with Next.js App Router, React, and GSAP.

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. Run `npm run build` and `npm start` to check the production build locally.

The page renders on the server. The client adds GSAP motion and interactive disclosures, with reduced-motion support. The portfolio assistant retrieves answers locally from the public sources defined in `app/assistant-content.js`. It uses no API key, external model, or visitor data storage.

The repository includes build settings for Netlify’s Next.js adapter.
