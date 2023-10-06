import type { Config } from "tailwindcss";

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter var", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica"],
    },
    letterSpacing: {
      tighter: "-0.04em",
      tight: "-0.025em",
    },
  },
} satisfies Config;
