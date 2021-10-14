// 导入配置的公共的文件
var commonConfig = require("./webpack.config.common");
// 导入合并配置文件的系统依赖包
var {merge} = require("webpack-merge");
// 记录合并之后的配置
var prodConfig = merge(
    // 公共配置
    commonConfig, 
    {
        mode: "production"
    }
);
// 模块系统
module.exports = prodConfig;
