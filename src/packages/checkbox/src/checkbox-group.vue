<script>
import Emitter from "../../../mixins/emitter";
export default {
  name: "MlCheckboxGroup",
  componentName: "MlCheckboxGroup",
  mixins: [Emitter],
  inject: {
    mlFormItem: {
      default: ""
    }
  },
  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },
  computed: {
    _formItemSize() {
      return (this.mlFormItem || {}).formItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._formItemSize || (this.$MOLI || {}).size;
    }
  },
  watch: {
    value(value) {
      // 待处理
      this.dispatch("MlFormItem", "el.form.change", [value]);
    }
  },
  render: function(h) {
    return h(
      "div",
      {
        class: "ml--checkbox-group",
        attrs: {
          role: "group",
          "aria-label": "checkbox-group"
        }
      },
      this.$slots.default
    );
  }
};
</script>
