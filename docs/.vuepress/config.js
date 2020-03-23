module.exports = {
  title: "Moli UI",
  base: "/moli/",
  description: "一套基于 Vue 2.0 的桌面端组件库",
  port: 8080,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/component/guide/introduction" }
      // { text: "主题", link: "/theme/" }
    ],
    sidebar: {
      "/component/": [
        {
          title: "开发指南",
          collapsable: false,
          children: ["guide/introduction", "guide/guide"]
        },
        {
          title: "组件",
          collapsable: false,
          children: [
            {
              title: "基础组件",
              collapsable: false,
              children: ["basic/button"]
            },
            {
              title: "表单组件",
              collapsable: false,
              children: [
                "basic/radio",
                "basic/checkbox",
                "basic/input",
                "basic/select",
                "basic/switch",
                "basic/form"
              ]
            },
            {
              title: "数据组件",
              collapsable: false
            },
            {
              title: "通知组件",
              collapsable: false
            },
            {
              title: "其他组件",
              collapsable: false
            }
          ]
        }
      ]
    }
  }
  // markdown: {
  //   lineNumbers: true
  // }
};
