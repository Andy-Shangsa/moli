<script type="text/babel">
import Emitter from "../../../mixins/emitter";
export default {
  mixins: [Emitter],
  name: "MlOptionGroup",
  componentName: "MlOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    };
  },
  watch: {
    disabled(val) {
      this.broadcast("MlOption", "handleGroupDisabled", val);
    }
  },
  render: function(h) {
    return h(
      "ul",
      {
        class: "ml-select-group__wrap",
        directives: [{ name: "show", value: this.visible }]
      },
      [
        h("li", { class: "ml-select-group__title" }, this.label),
        h("li", [h("ul", { class: "ml-select-group" }, this.$slots.default)])
      ]
    );
  },
  methods: {
    queryChange() {
      this.visible =
        this.$children &&
        Array.isArray(this.$children) &&
        this.$children.some(option => option.visible === true);
    }
  },
  created() {
    this.$on("queryChange", this.queryChange);
  },
  mounted() {
    if (this.disabled) {
      this.broadcast("MlOption", "handleGroupDisabled", this.disabled);
    }
  }
};
</script>
