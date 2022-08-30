/*
 * @Author: wangyongcun
 * @Date: 2021-08-15 15:43:51
 * @LastEditors: wangyongcun
 * @LastEditTime: 2021-12-24 10:50:32
 * @Description: 扩展配置
 */
import DefaultTheme from 'vitepress/theme'; //引入默认主题
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// 导出vitepress配置
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ElementPlus);
    }
}