// 开发环境的配置
var path = require("path");
var { merge } = require("webpack-merge");
var commonConfig = require("./webpack.config.common.js");
var devConfig = merge(
    commonConfig,
    {
        mode: "development",
        // 开启http服务(协议、ip、端口)
        devServer: {
            // 设置静态资源路径 htmlcssjs图片
            static: {
               directory: path.join(__dirname, 'dist'),
            },
            // 端口
            port: 9000,
            // 自动打开网页
            open: true,
            // 网络代理
            // 测试（提供数据）
            proxy: {
                '/api': {
                    // 代理地址
                    target: 'http://127.0.0.1:8080',
                    // 重载
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
          }
    }
)
module.exports = devConfig;


// localhost    127.0.0.1  
// host 文件
// 网络代理（跨域）
// 页面地址：http://127.0.0.1:9000/test.html
// 数据地址：http://127.0.0.1:8080/list


// 网页地址：http://127.0.0.1:9000/test.html
// 数据地址：http://127.0.0.1:8080/list （原来地址）
// 代理之后的地址
// 数据地址：http://127.0.0.1:9000/api/list（代理之后的地址）

