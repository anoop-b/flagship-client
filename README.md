# FlagShip Client Demo

This demo application uses [FlagShip](https://github.com/anoop-b/flagship) for feature toggling. The application is hosted on cloudflare pages and makes use of server side feature flag evaluation and dynamic rendering of content based on the evaluation (SSR).

Hop over to `AWS` branch for a demo using LaunchDarkly where I demonstrate the effect of caching.

## Developing

Ensure to set the following env variable, you can get it from LaunchDarkly's Dashboard after signing up:

```bash
LD_SDK_KEY="sdk-349834fb-8630-2d9e-9946-314cba4a5c9e"
```

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.