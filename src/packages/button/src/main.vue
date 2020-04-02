<!-- 按钮 -->
<script>
import { oneOf } from "../../../utils/assist";
export default {
  name: "MlButton",
  inject: {
    mlForm: {
      default: ""
    },
    mlFormItem: {
      default: ""
    }
  },
  props: {
    type: {
      validator(value) {
        return oneOf(value, [
          "default",
          "primary",
          "danger",
          "text",
          "info",
          "success",
          "warning"
        ]);
      },
      type: String,
      default: "default"
    },
    size: {
      type: String
    },
    nativeType: {
      type: String,
      default: "button"
    },
    icon: {
      type: String,
      default: ""
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    _formItemSize() {
      return (this.mlFormItem || {}).formItemSize;
    },
    buttonSize() {
      return this.size || this._formItemSize || (this.$MOLI || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.mlForm || {}).disabled;
    }
  },
  render: function(h) {
    let cls = "ml-button";
    // 按钮主题
    if (this.type) {
      cls += " ml-button--" + this.type;
    }
    // 幽灵按钮
    if (this.plain) {
      cls += " is-plain";
    }
    // 圆角按钮
    if (this.round) {
      cls += " is-round";
    }
    // 按钮尺寸
    if (this.buttonSize) {
      cls += " ml-button--" + this.buttonSize;
    }
    // 失效按钮
    if (this.buttonDisabled) {
      cls += " is-disabled";
    }
    // 加载中...
    if (this.loading) {
      cls += " is-loading";
    }
    // 是否显示icon
    const isShowIcon = this.icon && !this.loading;
    // 是否圆形按钮(圆角按钮且只有图标显示)
    const isCircle = isShowIcon && !this.$slots.default && this.round;
    if (isCircle) {
      cls += " is-circle";
    }
    return h(
      "button",
      {
        class: cls,
        attrs: {
          type: this.nativeType,
          autofocus: !!this.autofocus,
          disabled: this.buttonDisabled || this.loading,
          ...this.$attrs
        },
        on: {
          click: this.nativeClickHandler
        }
      },
      [
        isShowIcon ? h("i", { class: this.icon }) : "",
        this.loading ? h("i", { class: "ml-icon-loading" }) : "",
        this.$slots.default ? h("span", {}, this.$slots.default) : ""
      ]
    );
  },
  methods: {
    nativeClickHandler(e) {
      this.$emit("click", e);
    }
  }
};
</script>
