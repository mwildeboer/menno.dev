export default {
  printWidth: 120,
  plugins: ["prettier-plugin-astro"],
  pluginSearchDirs: ["."],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
