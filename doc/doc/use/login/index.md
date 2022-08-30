# 登录辅助

<a name="KWPbR"></a>

::: tip 示例项目
以标准产品4.0为例：[http://doimp.persagy.com/saasweb/login](http://taiyun.yintaiblt.com:30000/saasweb/login)，进入登录页后，面板会额外出现【显示密码】【免密登录】【智能填充】【点击切换至运维平台】四个功能点。
:::
![image.png](/login/0.png)


## 切换至运维平台
点击此按钮，可以在【数值化运管管理平台】和【运维平台】之间进行快速的切换。
<a name="o29Uj"></a>

## 显示密码
开启此功能，当前界面密码将明文显示。

<a name="grZoL"></a>

## 智能填充
如果您是第一次使用脚本登录该标准产品，开启此功能后，脚本会自动从后台获取一个密码并填充至当前输入框。
<br/>
如果是第二次登录，脚本则会使用上一次登录成功的密码。<br/> 

![image.png](/login/1.png)

当然，使用自动填充的密码进入系统后，可能能显示的菜单比较少（该账号拥有的权限少），没关系，继续向下看，我们还提供了账号查找功能！
::: danger 注意
自动获取密码功能在标准产品4.3以上版本无法使用！
:::

## 免密登录

<script lang="ts" setup>
import { ref } from 'vue'
const value2 = ref(true)
</script>
 开启免密登录后<el-switch v-model="value2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"/>，
  您只需要输入用户名即可登录系统。

![image.png](/login/2.png)

当然，您可能会觉得鸡肋，我都要到账号名称了，难道还要不到密码？


这在您登录运维平台时是非常有用的！运维平台的超管账号是PERSAGYADMIN，因此，使用免密登录可以让你
<b style="color:red">无需密码快速进入运维平台</b>。

![image.png](/login/4.png)

## 账号密码查询

点击【免密登录】，会出现一个【可用登录列表】弹框，脚本会自动获取所有可用登录名。

![image.png](/login/3.png)

点击【获取密码】，可以查询当前账号的密码。
点击【账号密码填充】，可以快速将账号信息填充在输入框。

![image.png](/login/5.png)

::: danger 注意
此功能无法在标准产品4.3以上版本使用
:::

某些情况下，我们使用【智能填充】或【账号密码一键填充】功能登录会失败，没关系。我们还有更强工具！
点击左下角红色按钮

![image.png](/login/6.png)

在弹出的面板里，点击【运维按钮】

![image.png](/login/7.png)

接下来，舞台就是你的了，随便扒拉个账号你登录岂不妙哉？

![image.png](/login/8.png)

::: danger 注意
不要乱动账号权限啊！
:::
