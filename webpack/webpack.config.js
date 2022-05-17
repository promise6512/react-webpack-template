const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

// 相对路径转换为绝对路径
const resolvePath = _path => path.resolve(__dirname, _path);

module.exports = {
  mode: "development",
  entry: resolvePath("../src/index.jsx"),
  output: {
    path: resolvePath("../dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "hjp-webpack-react",
      template: resolvePath("../public/index.html"),
      filename: "index.html"
    })
  ]
};
