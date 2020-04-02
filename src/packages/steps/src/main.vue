<script>
import Migrating from "../../../mixins/migrating";
export default {
  name: "MlSteps",
  mixins: [Migrating],
  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: "horizontal"
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: "finish"
    },
    processStatus: {
      type: String,
      default: "process"
    }
  },
  data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },
  render: function(h) {
    return h(
      "div",
      {
        class: [
          "ml-steps",
          this.simple ? "ml-steps--simple" : "ml-steps--" + this.direction
        ]
      },
      this.$slots.default
    );
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {
          center: "center is removed."
        }
      };
    }
  },
  watch: {
    active(newVal, oldVal) {
      this.$emit("change", newVal, oldVal);
    },
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    }
  }
};
</script>