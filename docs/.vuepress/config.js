module.exports = {
  title: "Moli UI",
  base: "/moli/",
  description: "一套基于 Vue 2.0 的桌面端组件库",
  port: 8080,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/component/guide/introduction" },
      { text: "github", link: "https://github.com/Andy-Shangsa/moli.git" }
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
                "form/radio",
                "form/checkbox",
                "form/input",
                "form/select",
                "form/switch",
                "form/form"
              ]
            },
            {
              title: "数据组件",
              collapsable: false,
              children: ["data/tag"]
            },
            {
              title: "通知组件",
              collapsable: false,
              children: ["notice/alert", "notice/message","notice/message-box", "notice/notify"]
            },
            {
              title: "其他组件",
              collapsable: false,
              children: ["other/tooltip"]
            }
          ]
        }
      ]
    }
  }
};
