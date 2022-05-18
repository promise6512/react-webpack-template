const { merge } = require("webpack-merge");
const { resolvePath, baseConfig } = require("./webpack.base.config");
module.exports = merge(baseConfig, {
  mode: "production",
});
