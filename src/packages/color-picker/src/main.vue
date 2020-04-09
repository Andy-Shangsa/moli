<template>
  <div
    :class="[
      'ml-color-picker',
      colorDisabled ? 'is-disabled' : '',
      colorSize ? `ml-color-picker--${ colorSize }` : ''
    ]"
    v-clickoutside="hide"
  >
    <div
      class="ml-color-picker__mask"
      v-if="colorDisabled"
    ></div>
    <div
      class="ml-color-picker__trigger"
      @click="handleTrigger"
    >
      <span
        class="ml-color-picker__color"
        :class="{ 'is-alpha': showAlpha }"
      >
        <span
          class="ml-color-picker__color-inner"
          :style="{
            backgroundColor: displayedColor
          }"
        ></span>
        <span
          class="ml-color-picker__empty ml-icon-close"
          v-if="!value && !showPanelColor"
        ></span>
      </span>
      <span
        class="ml-color-picker__icon ml-icon-arrow-down"
        v-show="value || showPanelColor"
      ></span>
    </div>
    <picker-dropdown
      ref="dropdown"
      :class="['ml-color-picker__panel', popperClass || '']"
      v-model="showPicker"
      @pick="confirmValue"
      @clear="clearValue"
      :color="color"
      :show-alpha="showAlpha"
      :predefine="predefine"
    >
    </picker-dropdown>
  </div>
</template>

<script>
import Color from "./color";
import PickerDropdown from "./components/picker-dropdown.vue";
import Clickoutside from "../../../utils/clickoutside";
import Emitter from "../../../mixins/emitter";
export default {
  name: "MlColorPicker",
  mixins: [Emitter],
  props: {
    value: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: String,
    popperClass: String,
    predefine: Array
  },
  inject: {
    elForm: {
      default: ""
    },
    elFormItem: {
      default: ""
    }
  },
  components: {
    PickerDropdown
  },
  directives: { Clickoutside },
  data() {
    const color = new Color({
      enableAlpha: this.showAlpha,
      format: this.colorFormat
    });
    return {
      color,
      showPicker: false,
      showPanelColor: false
    };
  },
  computed: {
    displayedColor() {
      if (!this.value && !this.showPanelColor) {
        return "transparent";
      }
      return this.displayedRgb(this.color, this.showAlpha);
    },
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    colorSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    colorDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.showPanelColor = false;
      } else if (val && val !== this.color.value) {
        this.color.fromString(val);
      }
    },
    color: {
      deep: true,
      handler() {
        this.showPanelColor = true;
      }
    },
    displayedColor(val) {
      if (!this.showPicker) return;
      const currentValueColor = new Color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat
      });
      currentValueColor.fromString(this.value);
      const currentValueColorRgb = this.displayedRgb(
        currentValueColor,
        this.showAlpha
      );
      if (val !== currentValueColorRgb) {
        this.$emit("active-change", val);
      }
    }
  },
  mounted() {
    const value = this.value;
    if (value) {
      this.color.fromString(value);
    }
    this.popperElm = this.$refs.dropdown.$el;
  },
  methods: {
    handleTrigger() {
      if (this.colorDisabled) return;
      this.showPicker = !this.showPicker;
    },
    confirmValue() {
      const value = this.color.value;
      this.$emit("input", value);
      this.$emit("change", value);
      this.dispatch("MlFormItem", "moli.form.change", value);
      this.showPicker = false;
    },
    clearValue() {
      this.$emit("input", null);
      this.$emit("change", null);
      if (this.value !== null) {
        this.dispatch("MlFormItem", "moli.form.change", null);
      }
      this.showPanelColor = false;
      this.showPicker = false;
      this.resetColor();
    },
    hide() {
      this.showPicker = false;
      this.resetColor();
    },
    resetColor() {
      this.$nextTick(_ => {
        if (this.value) {
          this.color.fromString(this.value);
        } else {
          this.showPanelColor = false;
        }
      });
    },
    displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error("color should be instance of Color Class");
      }
      const { r, g, b } = color.toRgb();
      return showAlpha
        ? `rgba(${r}, ${g}, ${b}, ${color.get("alpha") / 100})`
        : `rgb(${r}, ${g}, ${b})`;
    }
  }
};
</script>
