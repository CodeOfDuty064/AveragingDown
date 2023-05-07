const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const path = require("path");

module.exports = merge(common, {
  
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 8081,
    historyApiFallback: true,
    liveReload: true,
    // static: {
    //   directory: path.join(__dirname, "../public"),
    // },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
});
