// 导入 path
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//处理dist目录多余的文件(冗余)
// 模块系统对象
module.exports = {

    // 设置入口文件
    entry: {
        // 资源整合入口文件一
        "index": "./src/index.js"
    },

    //  设置出口文件
    output: {
        // 输出目录
        path: path.resolve(__dirname, "dist"),
        // 文件名称
        filename: "./js/[name]-[hash:8].js",
    },

    // 处理非 js 文件
    module: {
        rules: [

            // 处理 css 文件
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ],
    },

    // 配置插件
    plugins: [
     
        new HtmlWebpackPlugin({
            // 网页标题
            title: "首页",
            // 模板文件的路径
            template: "./src/view/index.html",
            // 输出模板文件名字
            filename: "index.html",
            // 与入口的 key 一一对应 
            chunks: ["index"],
        }),
        new CleanWebpackPlugin(),
    ] 
}