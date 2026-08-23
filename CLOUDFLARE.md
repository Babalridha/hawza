# Cloudflare deployment

This project produces a static Astro build in `dist` and deploys it to the
existing Cloudflare Pages project named `hawza`.

## Pages

Authenticate once with `npx wrangler login`, then run:

```sh
npm run deploy:pages
```

For Git-based Pages builds, use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

The Pages output directory is configured in `wrangler.jsonc`. The admissions
form submits directly to the external management API. Ensure that API allows
requests from the deployed Pages origin through its CORS configuration.
