import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://menno.dev",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [mdx(), sitemap(), compress()],
  vite: {
    // @ts-expect-error https://github.com/withastro/astro/issues/14030
    plugins: [tailwindcss()],
  },
});
