const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 相对路径转换为绝对路径
const resolvePath = _path => path.resolve(__dirname, _path);

const baseConfig = {
  entry: resolvePath("../src/index.tsx"),
  output: {
    path: resolvePath("../dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.svg$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hjp-webpack-react",
      template: resolvePath("../public/index.html"),
      filename: "index.html"
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};

module.exports = {
  baseConfig,
  resolvePath
};
