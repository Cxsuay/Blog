module.exports = {
  title: 'Cxsuay',
  base: '/blog/',
  description: 'Keep on going never give up',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  searchMaxSuggestions: 10,
  lastUpdated: true,
  themeConfig: {
    logo: 'avatar.jpg',
    smoothScroll: true,
    nav: [
  {
    "text": "首页",
    "link": "/"
  },
  {
    "text": "引导",
    "items": [
      {
        "text": "LeetCode",
        "link": "/docs/LeetCode/"
      }
    ]
  },
  {
    "text": "Github",
    "link": "https://github.com/cxsuay",
    "target": "_blank"
  },
  {
    "text": "Gitee(码云)",
    "link": "https://gitee.com/cxsuay",
    "target": "_blank"
  }
],
    sidebar: [
  {
    "text": "首页",
    "link": "/",
    "collapsable": false
  },
  {
    "text": "LeetCode",
    "link": "/docs/LeetCode/index",
    "children": [
      {
        "text": "NumberSum",
        "link": "/docs/LeetCode/NumberSum"
      },
      {
        "text": "RemoveElement",
        "link": "/docs/LeetCode/removeElement"
      }
    ]
  }
],
  }
}