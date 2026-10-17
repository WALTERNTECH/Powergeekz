import { defineConfig } from "astro/config";

// Static build. Pages are emitted as about.html, services.html … so the
// links that already exist on the live host keep working after upload.
export default defineConfig({
  site: "https://www.powergeekzengineeringltd.co.ke",
  build: {
    format: "file",
    assets: "assets",
  },
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
});
