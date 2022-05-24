module.exports = {
  env: {
    test: {
      presets: [
        "@babel/env",
        ["@babel/react", { runtime: "automatic" }],
        "@babel/typescript",
      ],
    },
  },
}
