<!-- message消息组件 -->
<script>
import { ICON_TYPE_MAP } from "../../../utils/config";
export default {
  name: "MlMessage",
  data() {
    return {
      visible: false,
      message: "",
      duration: 3000,
      type: "info",
      iconClass: "",
      customClass: "",
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    };
  },
  computed: {
    typeClass() {
      return this.type && !this.iconClass
        ? `ml-message__icon ml-icon-${ICON_TYPE_MAP[this.type]}`
        : "";
    },
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
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
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: { name: `ml-message-fade` },
        on: {
          "after-leave": this.handleAfterLeave
        }
      },
      [
        h(
          "div",
          {
            class: [
              "ml-message",
              this.type && !this.iconClass ? `ml-message--${this.type}` : "",
              this.center ? "is-center" : "",
              this.showClose ? "is-closable" : "",
              this.customClass
            ],
            style: this.positionStyle,
            directives: [{ name: "show", value: this.visible }],
            on: {
              mouseenter: this.clearTimer,
              mouseleave: this.startTimer
            },
            attrs: {
              role: "alert"
            }
          },
          [
            this.iconClass || this.typeClass
              ? h("i", {
                  class: this.iconClass || this.typeClass
                })
              : null,
            this.$slots.default
              ? this.$slots.default
              : this.dangerouslyUseHTMLString
              ? h("p", {
                  class: "ml-message__content",
                  domProps: {
                    innerHTML: this.message
                  }
                })
              : h(
                  "p",
                  {
                    class: "ml-message__content"
                  },
                  [this.message]
                ),
            this.showClose
              ? h("i", {
                  class: "ml-message__closeBtn ml-icon-close",
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
    );
  }
};
</script>
