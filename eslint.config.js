import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginA11y from "eslint-plugin-jsx-a11y";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  eslintPluginA11y.flatConfigs.strict,
  ...tseslint.configs.strictTypeChecked,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginTailwind.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".astro"],
      },
      sourceType: "module",
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-return": "off",
      "tailwindcss/classnames-order": "off",
    },
  },
  {
    ignores: [
      "eslint.config.js",
      "**/node_modules/*",
      "**/.astro/*",
      "**/.vercel/*",
      "**/build/*",
      "**/dist/*",
      "**/public/*",
      "src/env.d.ts",
    ],
  }
);
