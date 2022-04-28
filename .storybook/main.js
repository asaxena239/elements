module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    "../patterns/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  features: {
    postcss: false,
  },
}
