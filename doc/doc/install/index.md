<a name="GKPkx"></a>
# 安装说明
Persagy-Tool是一个浏览器脚本，该脚本针对博锐标准产品进行开发，兼容3.0以上版本。
<br />

其核心功能为：**标准产品登录辅助**、**标准产品信息梳理**及**接口拦截修改。**

如果您是第一次使用本脚本，您需要下载资源文件。资源文件包括一个
<b style="color:rgb(64 158 255)">Tampermonkey_4_8_0_0</b>文件夹（油猴）和一个<b style="color:rgb(64 158 255)">persagytool.js</b>脚本文件。
<el-button type="danger"> <a href="/persagy/博锐尚格标准产品辅助工具.zip" style="color:#fff"  download>点击下载资源压缩包</a> </el-button>

>使用前，您可以了解一些关于浏览器、油猴及脚本之间的基本关系：<a href="/persagy/doc/use/login/introduce/">脚本运行原理</a>

<br/>

::: tip 老用户提示
如果您的浏览器已经安装过油猴插件，我觉得您可以只下载脚本文件。
<el-button type="success"> <a href="/persagy/persagyTool.js" style="color:#fff"  download>点击下载脚本</a> </el-button>
::: 
## 谷歌浏览器

### 资源下载
下载资源文件并将其解压，将其中的<b style="color:rgb(64 158 255)">Tampermonkey_4_8_0_0</b>文件夹放在**一个不会被删除的地方**。
比如，您可以放在D盘：
![image.png](/install/1.png)<br/>
千万别放桌面啊大哥！删了就芭比Q了！:confused:
### 安装油猴插件
打开谷歌浏览器，选择【更多工具】-【扩展程序】<br />![image.png](/install/2.png)<br />
打开【开发者模式】<br />![image.png](/install/3.png)<br />
将【油猴插件】拖动至当前页面<br />![image.png](/install/4.png)

::: danger 注意 
如果拖动失败，点击页面左上角【加载已经解压的应用程序】按钮，手动选择插件即可。
::: 


安装成功后，界面会出现下图插件标志。<br />![image.png](/install/5.png)<br />

### 添加脚本
点击【扩展程序】按钮，在弹框内点击油猴插件的【固定】按钮，<br />
![image.png](/install/6.png)<br />完成后，浏览器面板会出现油猴插件的标志，点击后，选择【添加新脚本】
![image.png](/install/7.png)<br />将脚本内的内容删除(ctrl + A全选）<br />![image.png](/install/8.png)
<br />用记事本打开下载好的<b style="color:rgb(64 158 255)">persagyTool.js</b>脚本文件

将脚本内容复制并全部粘贴在如图所示空白区域内，ctrl+s保存后即可。<br />
![image.png](/install/9.png)
保存成功后，您可以关闭所有页面，删除下载的persagyTool.js脚本文件。

### 运行验证
脚本安装完毕后，随意打开一个网页，如果油猴插件的标志出现红色下角标或者页面左下角出现一个红色的按钮，即证明脚本正在运行。
![image.png](/install/10.png)

## Edge浏览器
哎呀，小编还没有整理，要不您先百度一下？
[传送门](https://www.bilibili.com/read/cv12982440)
## 火狐浏览器
很少用火狐，您自己搜搜吧，有时间了在补充:grimacing: