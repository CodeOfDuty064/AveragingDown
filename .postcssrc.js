module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        autoprefixer: { grid: "autoplace" },
      },
    ],
    ["postcss-short", { prefix: "x", skip: "-" }],
  ],
};
