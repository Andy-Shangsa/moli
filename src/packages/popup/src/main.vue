<script>
import Popup from "../../../utils/popup";
import emitter from "../../../mixins/emitter";
import Utils from "../../../utils//aria-utils";
export default {
  name: "MlPopup",
  mixins: [Popup, emitter],
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    },
    customClass: {
      type: String,
      default: ""
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "rtl",
      validator(val) {
        return ["ltr", "rtl", "ttb", "btt"].indexOf(val) !== -1;
      }
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "30%"
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    },
    withHeader: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isHorizontal() {
      return this.direction === "rtl" || this.direction === "ltr";
    }
  },
  data() {
    return {
      closed: false,
      prevActiveElement: null
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit("open");
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
        this.prevActiveElement = document.activeElement;
        this.$nextTick(() => {
          Utils.focusFirstDescendant(this.$refs.popup);
        });
      } else {
        if (!this.closed) this.$emit("close");
        this.$nextTick(() => {
          if (this.prevActiveElement) {
            this.prevActiveElement.focus();
          }
        });
      }
    }
  },
  methods: {
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
        this.$emit("close");
        if (this.destroyOnClose === true) {
          this.rendered = false;
        }
        this.closed = true;
      }
    },
    handleWrapperClick() {
      if (this.wrapperClosable) {
        this.closePopup();
      }
    },
    closePopup() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    handleClose() {
      // This method here will be called by PopupManger, when the `closeOnPressEscape` was set to true
      // pressing `ESC` will call this method, and also close the popup.
      // This method also calls `beforeClose` if there was one.
      this.closePopup();
    }
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: {
          name: "ml-popup-fade"
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
            class: "ml-popup__wrapper",
            attrs: { tabindex: -1 },
            directives: [{ name: "show", value: this.visible }]
          },
          [
            h(
              "div",
              {
                class: [
                  "ml-popup__container",
                  this.visible && "ml-popup__open"
                ],
                attrs: {
                  role: "document",
                  tabindex: "-1"
                },
                on: {
                  click: e => {
                    // self 修饰符
                    if (event.target !== event.currentTarget) return;
                    this.handleWrapperClick();
                  }
                }
              },
              [
                h(
                  "div",
                  {
                    ref: "popup",
                    class: ["ml-popup", this.direction, this.customClass],
                    style: this.isHorizontal
                      ? `width: ${this.size}`
                      : `height: ${this.size}`,
                    attrs: {
                      role: "dialog",
                      tabindex: "-1",
                      "aria-modal": true,
                      "aria-labelledby": "ml-popup__title",
                      "aria-label": this.title
                    }
                  },
                  [
                    this.withHeader
                      ? h(
                          "header",
                          {
                            class: "ml-popup__header",
                            attrs: { id: "ml-popup__title" }
                          },
                          [
                            this.$slots.title
                              ? this.$slots.title
                              : h(
                                  "span",
                                  {
                                    attrs: {
                                      role: "heading",
                                      title: this.title,
                                      tabindex: "0"
                                    }
                                  },
                                  this.title
                                ),
                            this.showClose
                              ? h(
                                  "button",
                                  {
                                    class: "ml-popup__close-btn",
                                    attrs: {
                                      type: "button",
                                      "aria-label": `close ${this.title ||
                                        "popup"}`
                                    },
                                    on: {
                                      click: this.closePopup
                                    }
                                  },
                                  [
                                    h("i", {
                                      class:
                                        "ml-dialog__close ml-icon ml-icon-close"
                                    })
                                  ]
                                )
                              : null
                          ]
                        )
                      : null,
                    this.rendered
                      ? h(
                          "section",
                          { class: "ml-popup__body" },
                          this.$slots.default
                        )
                      : null
                  ]
                )
              ]
            )
          ]
        )
      ]
    );
  }
};
</script>
