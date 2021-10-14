// 生产环境
// mode: "production",
var { merge } = require("webpack-merge");
var commonConfig = require("./webpack.config.common.js");
var prodConfig = merge(
    commonConfig,
    {
        mode: "production",
    }
)
module.exports = prodConfig;
