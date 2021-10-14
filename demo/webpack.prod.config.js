const { merge } = require('webpack-merge');
const baseConfig = require("./webpack.base.config");
const prodConfig = merge(baseConfig,{
    mode: "production",
})
module.exports = prodConfig;
