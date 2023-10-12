import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import compress from "astro-compress";

export default defineConfig({
  site: "https://menno.dev",
  output: "static",
  integrations: [
    mdx(),
    compress(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    vercel({
      webAnalytics: {
        enabled: true,
      },
    }),
  ],
  build: {
    inlineStylesheets: `always`,
  },
});
