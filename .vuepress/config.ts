import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '小屋文档',
  base:'/docs/',
  theme: defaultTheme({
    navbar: [
      {
        text: '云端小屋',
        link: 'https://fcbyk.com/',
      },
    ],
    sidebar:{
      "/":['/','/名字由来','/站点传送'],
    },
  }),
})