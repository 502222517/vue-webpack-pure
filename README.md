# vue-webpack-pure

> Vue.js + Vue-router +webpack 纯净版项目，支持less，scss。

## Build Setup

``` bash
# install dependencies
npm install  

# serve with hot reload at localhost:8282
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# dev配置
采用热刷新，端口修改在config/index.js 。

# build配置
文件生成目录dist

# less/scss 支持
<style lang="scss" scoped></style> // 修改对应lang

# vendor 配置（公共插件）
不用设置，默认匹配依赖node_modules下的js文件。注意如果是css的，需动态在style中导入。

# 语法
别名设置build/webpack.base.conf中alias。
样式导入：@import './styles/reset.css';

# 分割打包
利用require.ensure ，在router中设置
如：
	const Index = r => require.ensure([], () => r(require('views/index.vue')), 'index');
	const Tab = r => require.ensure([], () => r(require('views/tab.vue')), 'index');
这两个vue文件会合并成一个index.vue 文件。

# eslint 检查
这个检查很严格，如果不想启用，注释build/webpack.base.conf.js 中的 eslint-loader。

# 目录结构
<pre>
│  .gitignore          # 忽略文件,比如 node_modules
│  package.json        # 项目配置
│  README.md           # 项目说明
│  index.html          # 首页
│
├─ build               # webpack 配置
│    ├─ dev-server.js  # webpack 开发配置	  
│	 │
│	 ├─ build.js       # webpack 生产配置  
│	 │
│	 └─ webpack.base.conf.js    # 加载器配置
│	 
├─ config              # webpack server 配置
│	 ├─ index.js       # webpack 路径配置 ，server端口配置
│	 │
│	 ├─ dev.env.js     # 开发模式
│	 │
│	 └─ prod.env.js    # 生产模式
│
│
├─node_modules
│
├─ static	           # 开发模式打包完的文件会自动放在这里
│
├─ dist                # 生产模式打包完的文件会自动放在这里
│
└─src
    ├─ main.js         # 启动配置
    │
    ├─ app.vue 		   # 入口组件,内含路由和公共部分
    │
    ├─ router          # 路由配置
    │
    ├─components       # 组件
    │    │
	│    ├─ forms 	   # 自定义表单组件，如radio，checkebox、select
	│    │
	│    ├─ charts 	   # 图标组件
	│    │
	│    └─ widget	   # 小组件
    │
    ├─views            # 视图(即路由)
    │
    ├─directives       # 自定义指令
    │
    ├─filters          # 自定义过滤器
    │
    ├─libs             # 放置一些工具函数
    │
    ├─assets           # 放置图片
    │
    ├─styles           # 放置css
    │    │
    │    ├─ common.css # 通用css
    │    │
    │    └─ reset.css  # 页面初始化css
    │
    ├─fonts            # 放置iconfont字体
    │
    │
    └─template         # 放置html模板,webpack依赖此文件生成所需的html
         │
         │
         └─ index.html # 默认的html模板

</pre> 





