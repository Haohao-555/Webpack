const path = require("path");
const webpack = require("webpack");
// 插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); //清除冗余的文件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html模板
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 处理css文件（提取）
module.exports = {
    // 入口
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./js/[name]-[hash:4].js",
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
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
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false, //关闭es模块语法 （移除 ES Modules 下的严格模式）
                        limit: 8192, // 如果图片文件不超过8kb 就转成base64格式字符串
                        name: './img/[name].[hash:4].[ext]',
                        // outputPath: "./img",
                        // publicPath:  "../"
                    }
                }],
                type: 'javascript/auto'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: "defaults"
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: "Index",
            filename: 'index.html',
            template: './src/views/index.html',
            chunks: ["index"],
             inject: true  // webpack打包后的文件插入到新生成的html那个位置
             //true(默认值) 等价于 'body' 生成的文件插入到 body标签的最下方
            // false 不插入
            // 'head' 插入到<head>标签内部
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}