
// 导入 path 模块 （处理路径）
var path = require('path');

// module 模块系统对象
// exports 配置选项
module.exports = {
    // 入口文件
    entry: "./src/index.js",
    // 设置模式 development（开发模式） production 生产环境
    mode: "production",
    // 输出
    output: {
        /*
          __dirname: 项目的绝对路径
          打包后的文件存放在 dist 目录下
         */
        path: path.resolve(__dirname, "dist"),
        // 设置打包后的文件名称
        filename: "bundle.js"
    },
    // 配置 loader 模块
    module: {
        rules: [
            {
                // 打包 css 文件
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    "css-loader"
                ]
            }
        ]
    }
}