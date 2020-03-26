<!-- alert 警告 -->
<script>
import { ICON_TYPE_MAP } from "../../../utils/config";
export default {
  name: "MlAlert",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light",
      validator: function(value) {
        return ["light", "dark"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    typeClass() {
      return `ml-alert--${this.type}`;
    },
    iconClass() {
      const affix = ICON_TYPE_MAP[this.type] || "info";
      return `ml-icon-${affix}`;
    },
    isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : "";
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? "is-bold" : "";
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: {
          name: "ml-alert-fade"
        }
      },
      [
        h(
          "div",
          {
            class: [
              "ml-alert",
              this.typeClass,
              this.center ? "is-center" : "",
              "is-" + this.effect
            ],
            attrs: {
              role: "alert"
            },
            directives: [{ name: "show", value: this.visible }]
          },
          [
            this.showIcon
              ? h("i", {
                  class: ["ml-alert__icon", this.iconClass, this.isBigIcon]
                })
              : null,
            h("div", { class: "ml-alert__content" }, [
              this.$slots.title || this.title
                ? h("span", { class: ["ml-alert__title", this.isBoldTitle] }, [
                    this.$slots.title ? this.$slots.title : this.title
                  ])
                : null,
              this.$slots.default && !this.description
                ? h(
                    "p",
                    { class: "ml-alert__description" },
                    this.$slots.default
                  )
                : null,
              !this.$slots.default && this.description
                ? h("p", { class: "ml-alert__description" }, this.description)
                : null,
              h("div", {
                class: [
                  "ml-alert__closebtn",
                  {
                    "is-customed": this.closeText !== "",
                    "ml-icon-close": this.closeText === ""
                  }
                ],
                directives: [{ name: "show", value: this.closable }],
                on: {
                  click: this.close
                }
              })
            ])
          ]
        )
      ]
    );
  }
};
</script>
