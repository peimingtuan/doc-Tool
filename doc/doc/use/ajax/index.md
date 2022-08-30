# 原理说明

如果您是开发者，您可能会对下面的代码熟悉

```js
 1 // 创建XHR对象
 2 var xhr = new XMLHttpRequest();
 3 // 调用open函数
 4 xhr.open("GET","http://www.liulongbin.top:3006/api/getbooks")
 5 
 6 // 调用send函数,发起请求    
 7 xhr.send()
 8 // 监听onreadystatechange事件
 9 xhr.onreadystatechange = function () {
11  if (xhr.readyState === 4 && xhr.status === 200) {
12      //一些操作
16  }
17 }

```
这是浏览器创建xhr请求的最基本方式，我们使用的axios第三方库也是基于该方式实现的。
<b style="color:rgb(64 158 255)">接口查看与拦截修改</b>功能借助ajax-hook实现了对所有xhr请求的拦截与修改操作。

::: info 什么是ajax-hook？
ajax-hook是社区出现的一个小巧精致的js脚本，它可以拦截所有ajax请求并允许修改请求数据和响应数据！实际项目中它可以用于请求添加统一签名、协议自动解析、接口调用统计等。

- 传送门：[ajax-hook中文介绍](http://www.jianshu.com/p/9b634f1c9615)
:::
基于此功能，您能在不借助任何软件的情况下直接修改当前网页的请求接口，这再您进行页面测试的时候会非常有用，您可以查看【接口拦截】章节查看相关示例。

::: danger 注意
对于浏览器的fetch请求，脚本不会进行监听。因此，如果页面采用了fecth的方式进行了接口请求，您无法使用此功能。
但幸运的是，基本所有的接口都不会采用fecth的方式进行请求。
:::

### 运行时机
脚本的监听功能会在页面开始加载时执行，基于此机制，部分带有iframe的页面可能会抓取接口失败。
