<script>
import Popper from "../../../utils/vue-popper";
export default {
  name: "MlDropdownMenu",
  componentName: "MlDropdownMenu",
  mixins: [Popper],
  props: {
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      size: this.dropdown.dropdownSize
    };
  },
  inject: ["dropdown"],
  created() {
    this.$on("updatePopper", () => {
      if (this.showPopper) this.updatePopper();
    });
    this.$on("visible", val => {
      this.showPopper = val;
    });
  },
  mounted() {
    this.dropdown.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.dropdown.$el;
    // compatible with 2.6 new v-slot syntax
    // issue link https://github.com/ElemeFE/element/issues/14345
    this.dropdown.initDomOperation();
  },
  watch: {
    "dropdown.placement": {
      immediate: true,
      handler(val) {
        this.currentPlacement = val;
      }
    }
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: {
          name: "ml-zoom-in-top"
        },
        on: {
          "after-leave": this.doDestroy
        }
      },
      [
        h(
          "ul",
          {
            class: [
              "ml-dropdown-menu ml-popper",
              this.size ? `ml-dropdown-menu--${size}` : ""
            ],
            directives: [{ name: "show", value: this.showPopper }]
          },
          this.$slots.default
        )
      ]
    );
  }
};
</script>
