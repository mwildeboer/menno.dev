import type { Config } from "tailwindcss";

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["InterVariable", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica"],
    },
    letterSpacing: {
      tighter: "-0.025em",
      tight: "-0.0125em",
    },
  },
} satisfies Config;
