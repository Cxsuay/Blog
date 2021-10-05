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
        "text": "Js",
        "link": "/docs/Js/"
      },
      {
        "text": "Js-adv",
        "link": "/docs/Js-adv/"
      },
      {
        "text": "Node",
        "link": "/docs/Node/"
      },
      {
        "text": "Vue",
        "link": "/docs/Vue/"
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
    "title": "首页",
    "path": "/",
    "collapsable": false
  },
  {
    "text": "Js",
    "link": "/docs/Js",
    "children": [
      {
        "text": "Array",
        "link": "/docs/Js/Array"
      },
      {
        "text": "Class",
        "link": "/docs/Js/Class"
      },
      {
        "text": "Closure",
        "link": "/docs/Js/Closure"
      },
      {
        "text": "Code",
        "link": "/docs/Js/Code"
      },
      {
        "text": "Codes-promise",
        "link": "/docs/Js/Codes-promise"
      },
      {
        "text": "Copy",
        "link": "/docs/Js/Copy"
      },
      {
        "text": "EventLoop",
        "link": "/docs/Js/EventLoop"
      },
      {
        "text": "Function",
        "link": "/docs/Js/Function"
      },
      {
        "text": "Methods",
        "link": "/docs/Js/Methods"
      },
      {
        "text": "Modular",
        "link": "/docs/Js/Modular"
      },
      {
        "text": "Object",
        "link": "/docs/Js/Object"
      },
      {
        "text": "Promise",
        "link": "/docs/Js/Promise"
      },
      {
        "text": "RegExp",
        "link": "/docs/Js/RegExp"
      },
      {
        "text": "Sub",
        "link": "/docs/Js/Sub"
      },
      {
        "text": "Symbol",
        "link": "/docs/Js/Symbol"
      }
    ]
  },
  {
    "text": "Js-adv",
    "link": "/docs/Js-adv",
    "children": [
      {
        "text": "Type",
        "link": "/docs/Js-adv/Type"
      }
    ]
  },
  {
    "text": "Node",
    "link": "/docs/Node",
    "children": [
      {
        "text": "Api",
        "link": "/docs/Node/Api"
      },
      {
        "text": "Guide",
        "link": "/docs/Node/Guide"
      }
    ]
  },
  {
    "text": "Vue",
    "link": "/docs/Vue",
    "children": [
      {
        "text": "Base",
        "link": "/docs/Vue/Base"
      },
      {
        "text": "Component",
        "link": "/docs/Vue/Component"
      }
    ]
  }
],
  }
}