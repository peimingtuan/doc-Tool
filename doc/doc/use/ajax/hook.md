# 接口拦截


## 简介
接口拦截功能是本脚本最强大的功能，其能够对页面的接口进行修改，用于各种测试场景。

## 操作说明
点击 <el-button type="danger" plain>接口拦截列表</el-button> 按钮，会出现一个弹框，弹框用于展示已经拦截成功的接口，您可以在该弹框内进行查看、删除操作。

每个接口信息后面都有一个 <b style="color:rgb(64 158 255)">拦截设置</b> 按钮，点击该按钮，即可进入接口拦截配置界面。<br />

![image.png](/info/18.png)



拦截配置界面分为四个面板，接口基础信息面板、请求信息拦截面板、响应信息拦截面板及操作面板。![image.png](/info/19.png)

<br />在请求信息面板及响应信息面板内，您能够修改请求内容和响应内容，点击 <el-button type="primary">保存拦截设置</el-button> 按钮，即可对此接口进行拦截实现自定义数据的返回。

::: tip 
点击**保存拦截设置**前需要先开启【启用拦截】开关哦
:::

## 示例一：验证异常结果对页面的影响

::: tip 使用下面的网址完成示例：

- http://taiyun.yintaiblt.com:30000/saasweb/draw/home
- 使用脚本完成系统的登录

:::

探究定额能耗返回值为0时，对页面的影响

如图，为数据正常的页面展示

![image.png](/info/20.png)

1.搜索定额能耗相关接口，点击【拦截设置】<br />

![image.png](/info/21.png)

2.【自定义响应数据】面板内，将定额能耗的值修改为“0”，然后点击【启用拦截】，最后点击【保存拦截设置】

![image.png](/info/22.png)

3.点击【保存拦截设置】后，会返回上一级页面，且此时该接口的状态也会变为【拦截中】，【接口拦截列表】也会出现对应信息。

![image.png](/info/23.png)

4.最后，我们手动刷新当前页面即可看到修改后的效果。

![image.png](/info/24.png)

## 示例二：验证不同传参对页面的影响

验证不同入参的展示结果

在集团首页模块点击【年度分项能耗及占比】

![image.png](/info/tip1.png)

记住图表的样式

![image.png](/info/tip5.png)

点击屏幕右下角【接口信息】按钮，打开接口信息面板

找到我们触发的接口，点击【拦截设置】

![image.png](/info/tip2.png)

将请求参数的timeType改成1，启用拦截，最后点击【保存拦截设置】

![image.png](/info/tip3.png)

点击【保存拦截设置】后，页面会自动刷新，重新点击【年度分项能耗及占比】，会发现页面数据已经更改。

![image.png](/info/tip4.png)

## 示例三：验证页面兼容性
探究文字超出时，前端是否进行了“...”展示**

![image.png](/info/25.png)

使用关键词进行接口搜索，根据经验找出合适的接口，点击【拦截设置】

![image.png](/info/26.png)

查找需要修改的数值

![image.png](/info/27.png)

修改数值后，点击【启用拦截】按钮，最后点击【保存拦截设置按钮】

![image.png](/info/28.png)

刷新页面，即可看到效果

![image.png](/info/29.png)

除上述两种常见方式外，您还可以进行请求参数的拦截，从而验证前端传参问题。

::: danger 注意
拦截列表的信息储存是持久的，数据较多时可能会影响浏览器性能。
因此，在您不使用接口拦截功能时，请及时清空所有的拦截列表！
![image.png](/info/clear.png)
:::