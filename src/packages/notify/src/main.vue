<script type="text/babel">
import { ICON_TYPE_MAP } from "../../../utils/config";
export default {
  data() {
    return {
      visible: false,
      title: "",
      message: "",
      duration: 4500,
      type: "",
      showClose: true,
      customClass: "",
      iconClass: "",
      onClose: null,
      onClick: null,
      closed: false,
      verticalOffset: 0,
      timer: null,
      dangerouslyUseHTMLString: false,
      position: "top-right"
    };
  },
  computed: {
    typeClass() {
      return this.type && ICON_TYPE_MAP[this.type]
        ? `ml-icon-${ICON_TYPE_MAP[this.type]}`
        : "";
    },
    horizontalClass() {
      return this.position.indexOf("right") > -1 ? "right" : "left";
    },
    verticalProperty() {
      return /^top-/.test(this.position) ? "top" : "bottom";
    },
    positionStyle() {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    click() {
      if (typeof this.onClick === "function") {
        this.onClick();
      }
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 46 || e.keyCode === 8) {
        this.clearTimer(); // detele 取消倒计时
      } else if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      } else {
        this.startTimer(); // 恢复倒计时
      }
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: { name: "ml-notify-fade" }
      },
      [
        h(
          "div",
          {
            class: ["ml-notify", this.customClass, this.horizontalClass],
            style: this.positionStyle,
            directives: [{ name: "show", value: this.visible }],
            on: {
              mouseenter: this.clearTimer,
              mouseleave: this.startTimer
            }
          },
          [
            this.type || this.iconClass
              ? h("i", {
                  class: [
                    "ml-notification__icon",
                    this.typeClass,
                    this.iconClass
                  ]
                })
              : null,
            h(
              "div",
              {
                class: [
                  { "is-with-icon": this.typeClass || this.iconClass },
                  "ml-notify__group"
                ]
              },
              [
                h("p", { class: "ml-notify__title" }, this.title),
                h(
                  "div",
                  {
                    class: "ml-notify__content",
                    directives: [{ name: "show", value: this.visible }]
                  },
                  this.$slots.default || [
                    this.dangerouslyUseHTMLString
                      ? h("p", {
                          domProps: {
                            innerHTML: this.message
                          }
                        })
                      : h("p", [this.message])
                  ]
                ),
                this.showClose
                  ? h("div", {
                      class: "ml-notify__closeBtn ml-icon-close",
                      on: {
                        click: e => {
                          e.stopPropagation();
                          this.close();
                        }
                      }
                    })
                  : null
              ]
            )
          ]
        )
      ]
    );
  }
};
</script>