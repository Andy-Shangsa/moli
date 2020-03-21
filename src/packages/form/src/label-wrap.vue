<script>
export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  inject: ["mlForm", "mlFormItem"],
  render: function(h) {
    const slots = this.$slots.default;
    if (!slots) return null;
    if (this.isAutoWidth) {
      const autoLabelWidth = this.mlForm.autoLabelWidth;
      const style = {};
      if (autoLabelWidth && autoLabelWidth !== "auto") {
        const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
        if (marginLeft) {
          style.marginLeft = marginLeft + "px";
        }
      }
      return h(
        "div",
        { class: "ml-form-item__label-wrap", style: style },
        slots
      );
    } else {
      return slots[0];
    }
  },
  methods: {
    getLabelWidth() {
      if (this.$el && this.$el.firstElementChild) {
        const computedWidth = window.getComputedStyle(
          this.$el.firstElementChild
        ).width;
        return Math.ceil(parseFloat(computedWidth));
      } else {
        return 0;
      }
    },
    updateLabelWidth(action = "update") {
      if (
        this.$slots.default &&
        this.isAutoWidth &&
        this.$el.firstElementChild
      ) {
        if (action === "update") {
          this.computedWidth = this.getLabelWidth();
        } else if (action === "remove") {
          this.mlForm.deregisterLabelWidth(this.computedWidth);
        }
      }
    }
  },
  watch: {
    computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.mlForm.registerLabelWidth(val, oldVal);
        this.mlFormItem.updateComputedLabelWidth(val);
      }
    }
  },
  data() {
    return {
      computedWidth: 0
    };
  },
  mounted() {
    this.updateLabelWidth("update");
  },
  updated() {
    this.updateLabelWidth("update");
  },
  beforeDestroy() {
    this.updateLabelWidth("remove");
  }
};
</script>
