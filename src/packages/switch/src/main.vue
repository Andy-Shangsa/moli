<!-- switch -->
<script>
import emitter from "../../../mixins/emitter";
import Focus from "../../../mixins/focus";
import Migrating from "../../../mixins/migrating";
export default {
  name: "MlSwitch",
  inject: {
    mlForm: {
      default: ""
    }
  },
  mixins: [Migrating, emitter, Focus("input")],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeIconClass: {
      type: String,
      default: ""
    },
    inactiveIconClass: {
      type: String,
      default: ""
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: String,
    inactiveText: String,
    width: {
      type: Number,
      default: 40
    },
    name: {
      type: String,
      default: ""
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    id: String
  },
  data() {
    return {
      coreWidth: this.width
    };
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    switchDisabled() {
      return this.disabled || (this.mlForm || {}).disabled;
    }
  },
  render: function(h) {
    return h(
      "div",
      {
        class: [
          "ml-switch",
          { "is-disabled": this.switchDisabled, "is-checked": this.checked }
        ],
        attrs: {
          role: "switch",
          "aria-checked": this.checked,
          "aria-disabled": this.switchDisabled
        },
        on: {
          click: e => {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
            this.switchValue(e);
          }
        }
      },
      [
        h("input", {
          ref: "input",
          class: "ml-switch__input",
          attrs: {
            type: "checkbox",
            id: this.id,
            name: this.name,
            disabled: this.switchDisabled,
            "true-value": this.activeValue,
            "false-value": this.inactiveValue
          },
          on: {
            change: e => {
              this.handleChange(e);
            },
            keydown: e => {
              if (event.keyCode !== 13) return;
              this.switchValue(e);
            }
          }
        }),
        // inactiveText
        this.inactiveIconClass || this.inactiveText
          ? h(
              "span",
              {
                class: [
                  "ml-switch__label",
                  "ml-switch__label--left",
                  !this.checked ? "is-active" : ""
                ]
              },
              [
                !this.inactiveIconClass && this.inactiveText
                  ? h(
                      "span",
                      { attrs: { "aria-hidden": this.checked } },
                      this.inactiveText
                    )
                  : null,
                this.inactiveIconClass
                  ? h("i", { class: [this.inactiveIconClass] })
                  : null
              ]
            )
          : null,
        // 实例
        h("span", {
          ref: "core",
          class: "ml-switch__core",
          style: { width: this.coreWidth + "px" }
        }),
        // activeText
        this.activeIconClass || this.activeText
          ? h(
              "span",
              {
                class: [
                  "ml-switch__label",
                  "ml-switch__label--right",
                  this.checked ? "is-active" : ""
                ]
              },
              [
                !this.activeIconClass && this.activeText
                  ? h(
                      "span",
                      { attrs: { "aria-hidden": !this.checked } },
                      this.activeText
                    )
                  : null,
                this.activeIconClass
                  ? h("i", { class: [this.activeIconClass] })
                  : null
              ]
            )
          : null
      ]
    );
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      if (this.validateEvent) {
        this.dispatch("MlFormItem", "moli.form.change", [this.value]);
      }
    }
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },
  mounted() {
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  },
  methods: {
    handleChange(event) {
      const val = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue(e) {
      !this.switchDisabled && this.handleChange(e);
    },
    getMigratingConfig() {
      return {
        props: {
          "on-color": "on-color is renamed to active-color.",
          "off-color": "off-color is renamed to inactive-color.",
          "on-text": "on-text is renamed to active-text.",
          "off-text": "off-text is renamed to inactive-text.",
          "on-value": "on-value is renamed to active-value.",
          "off-value": "off-value is renamed to inactive-value.",
          "on-icon-class": "on-icon-class is renamed to active-icon-class.",
          "off-icon-class": "off-icon-class is renamed to inactive-icon-class."
        }
      };
    }
  }
};
</script>
