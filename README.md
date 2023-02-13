# 仿网易云音乐项目介绍

## 关于本项目

基于 Vue+Vant+vuex+axios+Vue-router +网易云API的前后端分离项目

原本使用的是javaweb技术进行后端开发，后经过学习用nodejs重新写了后端接口。

## 前端架构

- 页面结构(H5,CSS3,原生JS)
- 框架(基于Vue脚手架:vue-cli)进行搭建
- 数据请求处理框架(Axios)
- Vue-Router进行路由处理
- Vuex进行公共数据与方法的存储
- 使用Vant对UI界面进行美化

## 服务端架构

使用了[网易云音乐API][https//github.com/Binaryify/NeteaseCloudMusicApi]接口



## 目前项目已实现功能

1. 首页数据的展示
2. 音乐播放，切换，添加
3. 歌词跟随音乐，磁盘动画实现
5. 搜索功能
5. 歌单列表展示
6. 歌曲列表展示

## 安装

然后通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

下载[网易云音乐API][https//github.com/Binaryify/NeteaseCloudMusicApi]，执行命令

```
npm install 或 cnpm install
node app.js
```

最后打开myapp文件夹，执行命令

```
npm install 或 cnpm install
npm run serve
```

根据需要更改util/request.js内的baseURL为网易云音乐API端口

## 目录结构

myapp下的主要文件

```
myapp
├─ .gitignore
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public  						//静态资源存储目录
│  ├─ favicon.ico
│  ├─ index.html
│  └─ js
│     └─ rem.js					//移动端适配文件
├─ README.md
├─ src							
│  ├─ api						//对API接口的快捷调用
│  │  └─ index.js
│  ├─ App.vue					
│  ├─ assets					//静态资源存储目录
│  ├─ components				//组件存放目录
│  ├─ main.js
│  ├─ plugins					//插件注册文件
│  │  └─ index.js
│  ├─ router					//vue-Router目录
│  │  └─ index.js
│  ├─ store						//vuex目录
│  │  └─ index.js
│  ├─ utils						//工具类
│  │  ├─ messageCode.js			//状态码的引用
│  │  └─ request.js				//axios的封装
│  └─ views						//页面文件
└─ vue.config.js
```
