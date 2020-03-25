<script type="text/babel">
import Emitter from "../../../mixins/emitter";
import { getValueByPath, escapeRegexpString } from "../../../utils/util";
export default {
  mixins: [Emitter],
  name: "MlOption",
  componentName: "MlOption",
  inject: ["select"],
  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    };
  },
  computed: {
    isObject() {
      return (
        Object.prototype.toString.call(this.value).toLowerCase() ===
        "[object object]"
      );
    },
    currentLabel() {
      return this.label || (this.isObject ? "" : this.value);
    },
    currentValue() {
      return this.value || this.label || "";
    },
    itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
    limitReached() {
      if (this.select.multiple) {
        return (
          !this.itemSelected &&
          (this.select.value || []).length >= this.select.multipleLimit &&
          this.select.multipleLimit > 0
        );
      } else {
        return false;
      }
    }
  },
  watch: {
    currentLabel() {
      if (!this.created && !this.select.remote)
        this.dispatch("MlSelect", "setSelected");
    },
    value(val, oldVal) {
      const { remote, valueKey } = this.select;
      if (!this.created && !remote) {
        if (
          valueKey &&
          typeof val === "object" &&
          typeof oldVal === "object" &&
          val[valueKey] === oldVal[valueKey]
        ) {
          return;
        }
        this.dispatch("MlSelect", "setSelected");
      }
    }
  },
  render: function(h) {
    return h(
      "li",
      {
        class: [
          "ml-select-dropdown__item",
          {
            selected: this.itemSelected,
            "is-disabled":
              this.disabled || this.groupDisabled || this.limitReached,
            hover: this.hover
          }
        ],
        on: {
          mouseenter: this.hoverItem,
          click: e => {
            e.stopPropagation();
            this.selectOptionClick();
          }
        },
        directives: [{ name: "show", value: this.visible }]
      },
      [this.$slots.default || h("span", this.currentLabel)]
    );
  },
  methods: {
    isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        const valueKey = this.select.valueKey;
        return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
      }
    },
    contains(arr = [], target) {
      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1;
      } else {
        const valueKey = this.select.valueKey;
        return (
          arr &&
          arr.some(item => {
            return (
              getValueByPath(item, valueKey) ===
              getValueByPath(target, valueKey)
            );
          })
        );
      }
    },
    handleGroupDisabled(val) {
      this.groupDisabled = val;
    },
    hoverItem() {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
    selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch("MlSelect", "handleOptionClick", [this, true]);
      }
    },
    queryChange(query) {
      this.visible =
        new RegExp(escapeRegexpString(query), "i").test(this.currentLabel) ||
        this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },
  created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;
    this.$on("queryChange", this.queryChange);
    this.$on("handleGroupDisabled", this.handleGroupDisabled);
  },
  beforeDestroy() {
    const { selected, multiple } = this.select;
    let selectedOptions = multiple ? selected : [selected];
    let index = this.select.cachedOptions.indexOf(this);
    let selectedIndex = selectedOptions.indexOf(this);
    // if option is not selected, remove it from cache
    if (index > -1 && selectedIndex < 0) {
      this.select.cachedOptions.splice(index, 1);
    }
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
};
</script>
