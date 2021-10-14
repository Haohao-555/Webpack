// 导入配置的公共的文件
var commonConfig = require("./webpack.config.common");
// 导入合并配置文件的系统依赖包
var {merge} = require("webpack-merge");
// 导入 path
var path = require("path");
// 记录合并之后的配置
var devConfig = merge(
    // 公共配置
    commonConfig, 
    {
        mode: "development",
        // 提供 http 服务 （webpack-dev-server）
        devServer: {
            static: {
                directory: path.join(__dirname, "dist")
            },
            port: 9091,
            open: true,
            // 主要作用是提供测试数据
            proxy: {
                "/api": {
                    target: "http://127.0.0.1:8080",
                    // 重载
                    pathRewrite: {
                        "^/api": ''
                    }
                }
            }
        }
    }
);
// 模块系统
module.exports = devConfig;