### 两个命令参数
- 作用把模块的信息写入package.json文件
-–save
–-save-dev

### 环境依赖
devDependencies 用于本地环境开发 （–-save-dev）  webpack webpack-cli css-loader  上线的时候不需要使用
dependencies 用户发布环境  （--save）   例如 jquery  bootstrap   上线的时候需要使用

### 区别
devDependencies 依赖的模块会在开发环境下使用，生产环境不会被打包
dependencies 依赖的包既可以在开发环境使用,也能在生产环境使用

