module.exports = {
  title: "Moli",
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
              children: ["basic/layout", "basic/button"]
            },
            {
              title: "表单组件",
              collapsable: false,
              children: [
                "form/radio",
                "form/checkbox",
                "form/input",
                "form/cascader",
                "form/input-number",
                "form/time-picker",
                "form/date-picker",
                "form/slider",
                "form/rate",
                "form/select",
                "form/switch",
                "form/color-picker",
                "form/form"
              ]
            },
            {
              title: "数据组件",
              collapsable: false,
              children: [
                "data/tag",
                "data/table",
                "data/badge",
                "data/progress",
                "data/pagination"
              ]
            },
            {
              title: "通知组件",
              collapsable: false,
              children: [
                "notice/alert",
                "notice/loading",
                "notice/message",
                "notice/message-box",
                "notice/notify"
              ]
            },
            {
              title: "导航组件",
              collapsable: false,
              children: [
                "navigation/menu",
                "navigation/dropdown",
                "navigation/breadcrumb",
                "navigation/steps"
              ]
            },
            {
              title: "其他组件",
              collapsable: false,
              children: [
                "other/dialog",
                "other/tooltip",
                "other/popover",
                "other/popconfirm",
                "other/image",
                "other/swiper",
                "other/timeline",
                "other/collapse",
                "other/backtop",
                "other/popup"
              ]
            }
          ]
        }
      ]
    }
  }
};
