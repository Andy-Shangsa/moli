<script>
import Vue from "vue";
import mixin from "../mixins/block";
export default {
  name: "CodeBlock",
  props: {
    title: String,
    desc: String,
    modules: Array
  },
  mixins: [mixin],
  data() {
    return {};
  },
  render: function(h) {
    const elArr = this.modules.map((module, index) => {
      const codeStr = module.source.replace(/^\s*/gm, "").trim();
      return h("div", { class: "module" }, [
        module.title
          ? h("h3", {
              class: "title",
              domProps: {
                innerHTML: module.title
              }
            })
          : null,
        module.desc
          ? h("p", {
              class: "desc",
              domProps: {
                innerHTML: module.desc
              }
            })
          : null,
        h("div", { class: "component-wrapper" }, [
          h(
            "div",
            {
              class: "component-wrapper-demo"
            },
            this.$slots[module.key]
          ),
          h("div", { class: "code-content", style: { height: "0" } }, [
            h(
              "div",
              {
                class: "code-content-height",
                directives: [
                  {
                    name: "highlight"
                  }
                ]
              },
              [
                module.tips
                  ? h("div", {
                      class: "code-user-desc",
                      domProps: {
                        innerHTML: module.tips
                      }
                    })
                  : null,
                h("pre", [h("code", { class: "vue" }, [codeStr])])
              ]
            )
          ]),
          h(
            "div",
            {
              class: "lock-code",
              on: {
                click: () => {
                  this.showCode(index);
                }
              }
            },
            [
              h("i", {
                class: [
                  this.isShow[index]
                    ? "ml-icon-triangle-top"
                    : "ml-icon-triangle-bottom",
                  "icon-down"
                ]
              }),
              h(
                "span",
                { class: "lock-code-word" },
                this.isShow[index] ? "隐藏代码" : "显示代码"
              )
            ]
          )
        ])
      ]);
    });
    return h("div", { class: "code-block" }, [
      this.title ? h("h2", { class: "code-block__title" }, this.title) : null,
      this.desc
        ? h("p", {
            class: "code-block__desc",
            domProps: {
              innerHTML: this.desc
            }
          })
        : null,
      ...elArr
    ]);
  }
};
</script>
