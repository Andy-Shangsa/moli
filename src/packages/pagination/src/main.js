import Pager from "./page.vue";
import MlSelect from "../../select";
import MlOption from "../../option";
import MlInput from "../../input";
import Locale from "../../../mixins/locale";
import { valueEquals } from "../../../utils/util";

export default {
  name: "MlPagination",

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: Number,

    pageCount: Number,

    pagerCount: {
      type: Number,
      validator(value) {
        return (
          (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
        );
      },
      default: 7
    },

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: "prev, pager, next, jumper, ->, total"
    },

    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean
  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false
    };
  },

  render(h) {
    const layout = this.layout;
    if (!layout) return null;
    if (
      this.hideOnSinglePage &&
      (!this.internalPageCount || this.internalPageCount === 1)
    )
      return null;

    let template = (
      <div
        class={[
          "ml-pagination",
          {
            "is-background": this.background,
            "ml-pagination--small": this.small
          }
        ]}
      ></div>
    );
    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      jumper: <jumper></jumper>,
      pager: (
        <pager
          currentPage={this.internalCurrentPage}
          pageCount={this.internalPageCount}
          pagerCount={this.pagerCount}
          on-change={this.handleCurrentChange}
          disabled={this.disabled}
        ></pager>
      ),
      next: <next></next>,
      sizes: <sizes pageSizes={this.pageSizes}></sizes>,
      slot: <slot>{this.$slots.default ? this.$slots.default : ""}</slot>,
      total: <total></total>
    };
    const components = layout.split(",").map(item => item.trim());
    const rightWrapper = <div class="ml-pagination__rightwrapper"></div>;
    let haveRightWrapper = false;

    template.children = template.children || [];
    rightWrapper.children = rightWrapper.children || [];
    components.forEach(compo => {
      if (compo === "->") {
        haveRightWrapper = true;
        return;
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo]);
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo]);
      }
    });

    if (haveRightWrapper) {
      template.children.unshift(rightWrapper);
    }

    return template;
  },

  components: {
    Prev: {
      render(h) {
        return h(
          "button",
          {
            class: "btn-prev",
            attrs: {
              type: "button",
              disabled:
                this.$parent.disabled || this.$parent.internalCurrentPage <= 1
            },
            on: {
              click: this.$parent.prev
            }
          },
          [
            this.$parent.prevText
              ? h("span", this.$parent.prevText)
              : h("i", { class: "ml-icon ml-icon-arrow-left" })
          ]
        );
      }
    },

    Next: {
      render(h) {
        return h(
          "button",
          {
            class: "btn-next",
            attrs: {
              type: "button",
              disabled:
                this.$parent.disabled ||
                this.$parent.internalCurrentPage ===
                  this.$parent.internalPageCount ||
                this.$parent.internalPageCount === 0
            },
            on: {
              click: this.$parent.next
            }
          },
          [
            this.$parent.nextText
              ? h("span", this.$parent.nextText)
              : h("i", { class: "ml-icon ml-icon-arrow-right" })
          ]
        );
      }
    },

    Sizes: {
      mixins: [Locale],

      props: {
        pageSizes: Array
      },

      watch: {
        pageSizes: {
          immediate: true,
          handler(newVal, oldVal) {
            if (valueEquals(newVal, oldVal)) return;
            if (Array.isArray(newVal)) {
              this.$parent.internalPageSize =
                newVal.indexOf(this.$parent.pageSize) > -1
                  ? this.$parent.pageSize
                  : this.pageSizes[0];
            }
          }
        }
      },

      render(h) {
        return h(
          "span",
          {
            class: "ml-pagination__sizes"
          },
          [
            h(
              "ml-select",
              {
                attrs: {
                  value: this.$parent.internalPageSize,
                  popperClass: this.$parent.popperClass || "",
                  size: "mini",
                  disabled: this.$parent.disabled
                },
                on: {
                  input: this.handleChange
                }
              },
              this.pageSizes.map((item, index) => {
                return h("ml-option", {
                  key: index,
                  attrs: {
                    value: item,
                    label: item + this.t("moli.pagination.pagesize")
                  }
                });
              })
            )
          ]
        );
      },

      components: {
        MlSelect,
        MlOption
      },

      methods: {
        handleChange(val) {
          if (val !== this.$parent.internalPageSize) {
            this.$parent.internalPageSize = val = parseInt(val, 10);
            this.$parent.userChangePageSize = true;
            this.$parent.$emit("update:pageSize", val);
            this.$parent.$emit("size-change", val);
          }
        }
      }
    },

    Jumper: {
      mixins: [Locale],

      components: { MlInput },

      data() {
        return {
          userInput: null
        };
      },

      watch: {
        "$parent.internalCurrentPage"() {
          this.userInput = null;
        }
      },

      methods: {
        handleKeyup({ keyCode, target }) {
          // Chrome, Safari, Firefox triggers change event on Enter
          // Hack for IE: https://github.com/ElemeFE/element/issues/11710
          // Drop this method when we no longer supports IE
          if (keyCode === 13) {
            this.handleChange(target.value);
          }
        },
        handleInput(value) {
          this.userInput = value;
        },
        handleChange(value) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(
            value
          );
          this.$parent.emitChange();
          this.userInput = null;
        }
      },

      render(h) {
        return h("span", { class: "ml-pagination__jump" }, [
          this.t("moli.pagination.goto"),
          h("ml-input", {
            class: "ml-pagination__editor is-in-pagination",
            attrs: {
              min: 1,
              max: this.$parent.internalPageCount,
              value:
                this.userInput !== null
                  ? this.userInput
                  : this.$parent.internalCurrentPage,
              type: "number",
              disabled: this.$parent.disabled
            },
            on: {
              input: this.handleInput,
              change: this.handleChange
            },
            nativeOn: {
              keyup: this.handleKeyup
            }
          }),
          this.t("moli.pagination.pageClassifier")
        ]);
      }
    },

    Total: {
      mixins: [Locale],

      render(h) {
        return typeof this.$parent.total === "number"
          ? h(
              "span",
              { class: "ml-pagination__total" },
              this.t("moli.pagination.total", { total: this.$parent.total })
            )
          : null;
      }
    },

    Pager
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
      this.userChangePageSize = true;
      this.emitChange();
    },

    prev() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit("prev-click", this.internalCurrentPage);
      this.emitChange();
    },

    next() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit("next-click", this.internalCurrentPage);
      this.emitChange();
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10);

      const havePageCount = typeof this.internalPageCount === "number";

      let resetValue;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    },

    emitChange() {
      this.$nextTick(() => {
        if (
          this.internalCurrentPage !== this.lastEmittedPage ||
          this.userChangePageSize
        ) {
          this.$emit("current-change", this.internalCurrentPage);
          this.lastEmittedPage = this.internalCurrentPage;
          this.userChangePageSize = false;
        }
      });
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === "number") {
        return Math.max(1, Math.ceil(this.total / this.internalPageSize));
      } else if (typeof this.pageCount === "number") {
        return Math.max(1, this.pageCount);
      }
      return null;
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val);
      }
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val;
      }
    },

    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit("update:currentPage", newVal);
        this.lastEmittedPage = -1;
      }
    },

    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage;
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1;
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal;
        this.userChangePageSize && this.emitChange();
      }
      this.userChangePageSize = false;
    }
  }
};
