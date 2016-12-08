# todo

> A Vue.js project

> 一定要安装Node.js! 一定要安装Node.js! 一定要安装Node.js!

## Build Setup

``` bash
# install dependencies
npm install

# 开发环境运行
npm run dev

# 生产环境运行
npm run build
```
## 系统结构 Structure

├─build           编译目录（webpack需要，不要动）
│  ├─build.js         
│  ├─check-versions.js         
│  ├─dev-client.js       
│  ├─dev-server.js       
│  ├─webpack.base.conf.js 
│  ├─webpack.dev.conf.js 
│  ├─webpack.prod.conf.js    
│  └─utils.js          
├─config                配置目录（可定义）

├─src              	  系统源码目录
│  ├─assets               静态资源如css、js等
│  ├─components            系统核心组件目录
│  │  ...
│  ├─App.vue            系统父级组件（负责引入和显示其他组件）
│  └─main.js            系统入口文件（大部分逻辑在此，负责引入所有的依赖包）

├─static           系统静态资源    
├─package.json         package 定义文件
├─index.html           访问入口文件
├─README.md             README 文件

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
