<script>
import Emitter from "../../../mixins/emitter";
export default {
  name: "MlDropdownItem",
  mixins: [Emitter],
  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean,
    icon: String
  },
  methods: {
    handleClick(e) {
      this.dispatch("MlDropdown", "menu-item-click", [this.command, this]);
    }
  },
  render: function(h) {
    return h(
      "li",
      {
        class: [
          "ml-dropdown-menu__item",
          {
            "is-disabled": this.disabled,
            "ml-dropdown-menu__item--divided": this.divided
          }
        ],
        attrs: {
          "aria-disabled": this.disabled,
          tabindex: this.disabled ? null : -1
        },
        on: {
          click: this.handleClick
        }
      },
      [this.icon ? h("i", { class: this.icon }) : null, this.$slots.default]
    );
  }
};
</script>
