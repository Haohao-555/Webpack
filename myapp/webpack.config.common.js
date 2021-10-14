var path = require("path");
var webpack = require("webpack");


var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");// 提取css代码（单独）
module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle-[name]-[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // 针对css文件中背景图
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false, // 关闭ES中的严格模式
                            limit: 8192,// 限制大小
                            name: './photo/[name]-[hash:8].[ext]',// 设置文件目录和名称
                        }
                    },
                ],
                // webpack 5.+ 需要防止重复打包图片
                type: 'javascript/auto'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            // 让html文档直接支持img标签使用图片
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Index",
            template: "./src/views/index.html",
            filename: "index.html",
            chunks:["index"]
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:"./css/[name].css"
        }),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}