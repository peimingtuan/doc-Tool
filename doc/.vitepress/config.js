module.exports = {
    base: '/persagy',
    lang: 'zh-CN',
    title: 'PersagyTool',//导航栏标题
    description: '标准产品辅助工具',//
    //主题配置
    themeConfig: {
        //文档页脚
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        //最后更新文本
        lastUpdatedText: '最近更新时间：',
        //社交链接
        socialLinks:[
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
        //网站标题
        siteTitle: 'PersagyTool',
        //大纲标题
        outlineTitle: '本文档主要内容',
        //页脚
        footer: {
            message: '标准产品辅助工具-PersagyTool',
            copyright: 'Copyright © 2022-present 西安开发出品'
        },
        //导航栏图标
        logo: '/logo.png',
        //导航栏链接
        nav: [
            {text: '首页', link: '/'},
            {text: '安装', link: '/doc/install/'},
            {text: '使用说明', link: '/doc/use/login/introduce/',activeMatch: '/doc/use/'},  
            // {text: '相关链接', items:[
            //     {text: 'axios-mock', link: '/doc/ajaxInfo/'},
            //     {text: '标准产品网址', link: '/doc/ajaxInfo/'},    
            // ]},  
            // {text: '意见反馈', link: '/doc/ajaxInfo/'}, 
        ],
        sidebar: {
            '/doc/use/':[
                { text: '标准产品登录辅助',items: [
                        {text:"基础知识",link:"/doc/use/login/introduce/"},
                        {text:"登录辅助",link:"/doc/use/login/"},
                        // {text:"明文密码",link:"/doc/use/login/"}
                    ],collapsible: true,
                }, 
                { text: '标准产品信息汇总', items: [
                    {text:"版本信息",link:"/doc/use/info/"},
                    {text:"核心信息面板",link:"/doc/use/info/information"},

                ] ,collapsible: true,},
                { text: '接口查看与拦截修改', items: [
                    {text:"原理说明",link:"/doc/use/ajax/"},
                    {text:"接口查看",link:"/doc/use/ajax/view"},
                    {text:"接口拦截",link:"/doc/use/ajax/hook"},
                ] ,collapsible: true,},
                { text: '其他', items: [
                    {text:"油猴插件相关设置",link:"/doc/use/other/jr"},
                    {text:"如何更新脚本",link:"/doc/use/other/update"},
                    {text:"特别鸣谢",link:"/doc/use/other/thanks"},
                ] ,collapsible: true,}
            ],
        }
    }
}
