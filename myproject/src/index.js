// 导入css文件
import "./css/reset.css";
import "./scss/nav.scss";
import "./scss/main.scss";

// 导入js文件
// ./  表示当前目录的意思
// 备注：在nodejs环境下，js文件可以去掉后缀名，例如 ./nav.js  可以简写成./nav
// import "./js/nav";
import { obj } from "./js/nav";
obj.tab();

// 关键字
// export  导出
// import  导入
