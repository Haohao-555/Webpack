const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = merge(baseConfig, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        // contentBase:path.resolve(__dirname,"dist"),
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                pathRewrite: {
                    '^/api': ''
                },
            },
        },
        open: true
    },
})
module.exports = devConfig;