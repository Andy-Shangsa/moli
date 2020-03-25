
<script type="text/babel">
import Popper from "../../../utils/vue-popper";
export default {
  name: "MlSelectDropdown",
  componentName: "MlSelectDropdown",
  mixins: [Popper],
  props: {
    placement: {
      default: "bottom-start"
    },
    boundariesPadding: {
      default: 0
    },
    popperOptions: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    visibleArrow: {
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      minWidth: ""
    };
  },
  computed: {
    popperClass() {
      return this.$parent.popperClass;
    }
  },
  watch: {
    "$parent.inputWidth"() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + "px";
    }
  },
  render: function(h) {
    return h(
      "div",
      {
        class: [
          "ml-select-dropdown ml-popper",
          this.popperClass,
          { "is-multiple": this.$parent.multiple }
        ],
        style: { minWidth: this.minWidth }
      },
      this.$slots.default
    );
  },
  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on("updatePopper", () => {
      if (this.$parent.visible) this.updatePopper();
    });
    this.$on("destroyPopper", this.destroyPopper);
  }
};
</script>