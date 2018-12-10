# finwex-index-web-vue

> FinwexIndexWeb
>* FinWex的网站项目。 
>* 技术栈： Node.js Koa.js Nuxt.js Vue.js SASS
>* 本项目首次加载均为SSR，动作为SPA。

## Build Setup

``` bash
启动开发环境
$ npm run dev

部署到生产
$ npm run build
$ npm start

生成静态
$ npm run generate
```

建议Node版本8以上

## 目录结构

server 服务器端代码

components 所有的Vue组件

layout 布局文件

pages 首屏加载页面

asset webpack管理的静态资源

static web静态资源，这个生产环境会用CDN代替。

其他的不重要，不懂的问周俊
