<!-- InputNumber 数字输入框 -->
<script>
import MlInput from "../../input";
import Focus from "../../../mixins/focus";
import RepeatClick from "../../../directives/repeat-click";
export default {
  name: "MlInputNumber",
  mixins: [Focus("input")],
  inject: {
    mlForm: {
      default: ""
    },
    mlFormItem: {
      default: ""
    }
  },
  directives: {
    repeatClick: RepeatClick
  },
  components: {
    MlInput
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {},
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ""
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    }
  },
  data() {
    return {
      currentValue: 0,
      userInput: null
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            return;
          }
          if (this.stepStrictly) {
            const stepPrecision = this.getPrecision(this.step);
            const precisionFactor = Math.pow(10, stepPrecision);
            newVal =
              (Math.round(newVal / this.step) * precisionFactor * this.step) /
              precisionFactor;
          }
          if (this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
          }
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.userInput = null;
        this.$emit("input", newVal);
      }
    }
  },
  computed: {
    minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    numPrecision() {
      const { value, step, getPrecision, precision } = this;
      const stepPrecision = getPrecision(step);
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn(
            "[Element Warn][InputNumber]precision should not be less than the decimal places of step"
          );
        }
        return precision;
      } else {
        return Math.max(getPrecision(value), stepPrecision);
      }
    },
    controlsAtRight() {
      return this.controls && this.controlsPosition === "right";
    },
    _formItemSize() {
      return (this.mlFormItem || {}).formItemSize;
    },
    inputNumberSize() {
      return this.size || this._formItemSize || (this.$MOLI || {}).size;
    },
    inputNumberDisabled() {
      return this.disabled || (this.mlForm || {}).disabled;
    },
    displayValue() {
      if (this.userInput !== null) {
        return this.userInput;
      }
      let currentValue = this.currentValue;
      if (typeof currentValue === "number") {
        if (this.stepStrictly) {
          const stepPrecision = this.getPrecision(this.step);
          const precisionFactor = Math.pow(10, stepPrecision);
          currentValue =
            (Math.round(currentValue / this.step) *
              precisionFactor *
              this.step) /
            precisionFactor;
        }
        if (this.precision !== undefined) {
          currentValue = currentValue.toFixed(this.precision);
        }
      }
      return currentValue;
    }
  },
  methods: {
    toPrecision(num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(
        Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
      );
    },
    getPrecision(value) {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    _increase(val, step) {
      if (typeof val !== "number" && val !== undefined)
        return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return this.toPrecision(
        (precisionFactor * val + precisionFactor * step) / precisionFactor
      );
    },
    _decrease(val, step) {
      if (typeof val !== "number" && val !== undefined)
        return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision(
        (precisionFactor * val - precisionFactor * step) / precisionFactor
      );
    },
    increase() {
      if (this.inputNumberDisabled || this.maxDisabled) return;
      const value = this.value || 0;
      const newVal = this._increase(value, this.step);
      this.setCurrentValue(newVal);
    },
    decrease() {
      if (this.inputNumberDisabled || this.minDisabled) return;
      const value = this.value || 0;
      const newVal = this._decrease(value, this.step);
      this.setCurrentValue(newVal);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    setCurrentValue(newVal) {
      const oldVal = this.currentValue;
      if (typeof newVal === "number" && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal >= this.max) {
        this.$emit("exceed-max", newVal);
        newVal = this.max;
      }
      if (newVal <= this.min) {
        this.$emit("less-min", newVal);
        newVal = this.min;
      }
      if (oldVal === newVal) return;
      this.userInput = null;
      this.$emit("input", newVal);
      this.$emit("change", newVal, oldVal);
      this.currentValue = newVal;
    },
    handleInput(value) {
      this.userInput = value;
    },
    handleInputChange(value) {
      const newVal = value === "" ? undefined : Number(value);
      if (!isNaN(newVal) || value === "") {
        this.setCurrentValue(newVal);
      }
      this.userInput = null;
    },
    select() {
      this.$refs.input.select();
    }
  },
  mounted() {
    let innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute("role", "spinbutton");
    innerInput.setAttribute("aria-valuemax", this.max);
    innerInput.setAttribute("aria-valuemin", this.min);
    innerInput.setAttribute("aria-valuenow", this.currentValue);
    innerInput.setAttribute("aria-disabled", this.inputNumberDisabled);
  },
  updated() {
    if (!this.$refs || !this.$refs.input) return;
    const innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute("aria-valuenow", this.currentValue);
  },
  render: function(h) {
    return h(
      "div",
      {
        class: [
          "ml-input-number",
          this.inputNumberSize
            ? "ml-input-number--" + this.inputNumberSize
            : "",
          { "is-disabled": this.inputNumberDisabled },
          { "is-without-controls": !this.controls },
          { "is-controls-right": this.controlsAtRight }
        ],
        on: {
          dragstart: e => {
            e.preventDefault();
          }
        }
      },
      [
        this.controls
          ? h(
              "span",
              {
                class: [
                  "ml-input-number__decrease",
                  { "is-disabled": this.minDisabled }
                ],
                attrs: {
                  role: "button"
                },
                on: {
                  keydown: e => {
                    if (e.keyCode !== 13) {
                      this.decrease();
                    }
                  }
                },
                directives: [{ name: "repeat-click", expression: "decrease" }]
              },
              [
                h("i", {
                  class: this.controlsAtRight
                    ? "ml-icon-arrow-down"
                    : "ml-icon-minus"
                })
              ]
            )
          : null,
        this.controls
          ? h(
              "span",
              {
                class: [
                  "ml-input-number__increase",
                  { "is-disabled": this.maxDisabled }
                ],
                attrs: {
                  role: "button"
                },
                on: {
                  keydown: e => {
                    if (e.keyCode !== 13) {
                      this.increase();
                    }
                  }
                },
                directives: [{ name: "repeat-click", expression: "increase" }]
              },
              [
                h("i", {
                  class: this.controlsAtRight
                    ? "ml-icon-arrow-top"
                    : "ml-icon-plus"
                })
              ]
            )
          : null,
        h("ml-input", {
          ref: "input",
          attrs: {
            placeholder: this.placeholder,
            disabled: this.inputNumberDisabled,
            size: this.inputNumberSize,
            max: this.max,
            min: this.min,
            name: this.name,
            label: this.label,
            value: this.displayValue
          },
          on: {
            blur: this.handleBlur,
            focus: this.handleFocus,
            input: this.handleInput,
            change: this.handleInputChange
          },
          nativeOn: {
            keydown: e => {
              e.preventDefault();
              if (e.keyCode === 38) {
                this.increase();
              }
              if (e.keyCode === 40) {
                this.decrease();
              }
            }
          }
        })
      ]
    );
  }
};
</script>
