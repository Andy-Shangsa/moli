<script>
import Popup from "../../../utils/popup";
import Migrating from "../../../mixins/migrating";
import emitter from "../../../mixins/emitter";
export default {
  name: "MlDialog",
  mixins: [Popup, emitter, Migrating],
  props: {
    title: {
      type: String,
      default: ""
    },
    modal: {
      type: Boolean,
      default: true
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    width: String,
    fullscreen: Boolean,
    customClass: {
      type: String,
      default: ""
    },
    top: {
      type: String,
      default: "15vh"
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: Boolean
  },
  data() {
    return {
      closed: false,
      key: 0
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit("open");
        this.$el.addEventListener("scroll", this.updatePopper);
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener("scroll", this.updatePopper);
        if (!this.closed) this.$emit("close");
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
          });
        }
      }
    }
  },
  computed: {
    style() {
      let style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    }
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: {
          name: "dialog-fade"
        },
        on: {
          "after-enter": this.afterEnter,
          "after-leave": this.afterLeave
        }
      },
      [
        h(
          "div",
          {
            class: "ml-dialog__wrapper",
            directives: [{ name: "show", value: this.visible }],
            on: {
              click: e => {
                // self 修饰符
                if (event.target !== event.currentTarget) return;
                this.handleWrapperClick(e);
              }
            }
          },
          [
            h(
              "div",
              {
                ref: "dialog",
                key: this.key,
                class: [
                  "ml-dialog",
                  {
                    "is-fullscreen": this.fullscreen,
                    "ml-dialog--center": this.center
                  },
                  this.customClass
                ],
                style: this.style,
                attrs: {
                  role: "dialog",
                  "aria-modal": true,
                  "aria-label": this.title || "dialog"
                }
              },
              [
                h("div", { class: "ml-dialog__header" }, [
                  this.$slots.title
                    ? this.$slots.title
                    : h("span", { class: "ml-dialog__title" }, this.title),
                  this.showClose
                    ? h(
                        "button",
                        {
                          class: "ml-dialog__headerbtn",
                          attrs: {
                            "aria-label": "Close",
                            type: "button"
                          },
                          on: {
                            click: this.handleClose
                          }
                        },
                        [
                          h("i", {
                            class: "ml-dialog__close ml-icon ml-icon-close"
                          })
                        ]
                      )
                    : null
                ]),
                this.rendered
                  ? h("div", { class: "ml-dialog__body" }, [
                      this.$slots.default
                    ])
                  : null,
                this.$slots.footer
                  ? h("div", { class: "ml-dialog__footer" }, [
                      this.$slots.footer
                    ])
                  : null
              ]
            )
          ]
        )
      ]
    );
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {
          size: "size is removed."
        }
      };
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
        this.$emit("close");
        this.closed = true;
      }
    },
    updatePopper() {
      this.broadcast("MlSelectDropdown", "updatePopper");
      this.broadcast("MlDropdownMenu", "updatePopper");
    },
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    }
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
