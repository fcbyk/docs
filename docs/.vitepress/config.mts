// 定义vp站点的全局设置，配置文件应该默认导出一个对象
// 该数据结构可通过TypeScript中的声明语句进行查看

// 辅助函数，参数为一个配置对象，函数的返回值也是一个配置对象，只是多了选项提示
import { defineConfig } from 'vitepress'

// 默认导出
export default defineConfig({

  title: "小屋文档",

  head: [
    // 引入图标库
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }]
  ],
 
  // 主题相关配置
  themeConfig: {

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fcbyk/docs' }
    ],

    // 把页面默认的英文改中文
    darkModeSwitchLabel:"夜间模式",
    sidebarMenuLabel:"文档",
    returnToTopLabel:"返回顶部",
    outlineTitle:"目录",

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 配置侧边栏
    sidebar:{
      "/pages/":[
        {
          text: "导航栏练习",
          link: "/pages/navigation-bar",
        },
        {
          text: "动画练习",
          link: "/pages/animation",
        }
      ]
    },

    nav:[
      {
        text: "CSS练习",
        link: "/pages/navigation-bar"
      }
    ]
  }
})
