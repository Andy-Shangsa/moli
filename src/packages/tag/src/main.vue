<!-- Tag -->
<script>
import { oneOf } from "../../../utils/assist";
export default {
  name: "MlTag",
  props: {
    removable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: "light",
      validator(val) {
        return oneOf(val, ["dark", "light", "plain"]);
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    tagSize() {
      return this.size || (this.$MOLI || {}).size;
    }
  },
  render: function(h) {
    const el = h(
      "span",
      {
        class: [
          "ml-tag",
          this.type ? `ml-tag--${this.type}` : "",
          this.tagSize ? `ml-tag--${this.tagSize}` : "",
          this.effect ? `ml-tag--${this.effect}` : "",
          this.hit && "is-hit"
        ],
        style: {
          backgroundColor: this.color
        },
        on: {
          click: event => {
            this.$emit("click", event);
          }
        }
      },
      [
        this.$slots.default,
        this.removable
          ? h("i", {
              class: "ml-tag__close ml-icon-close",
              on: {
                click: event => {
                  event.stopPropagation();
                  this.$emit("close", event);
                }
              }
            })
          : null
      ]
    );
    return this.disableTransitions
      ? el
      : h(
          "transition",
          {
            props: { name: "ml-zoom-in-center" }
          },
          [el]
        );
  },
  methods: {}
};
</script>
