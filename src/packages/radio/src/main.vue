<template>
  <label
    class="ml-radio"
    :class="[
      border && radioSize ? 'ml-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      class="ml-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="ml-radio__inner"></span>
      <input
        ref="radio"
        class="ml-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span
      class="ml-radio__label"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from "../../../mixins/emitter";
export default {
  name: "MRadio",
  mixins: [Emitter],
  inject: {
    MForm: {
      default: ""
    },
    MFormItem: {
      default: ""
    }
  },
  componentName: "MRadio",
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  data() {
    return {
      focus: false
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "MRadioGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("MRadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      }
    },
    _elFormItemSize() {
      return (this.MFormItem || {}).MFormItemSize;
    },
    radioSize() {
      const temRadioSize =
        this.size || this._elFormItemSize || (this.$MOLI || {}).size;
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize;
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled ||
            this.disabled ||
            (this.MForm || {}).disabled
        : this.disabled || (this.MForm || {}).disabled;
    },
    tabIndex() {
      return this.isDisabled || (this.isGroup && this.model !== this.label)
        ? -1
        : 0;
    }
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup &&
          this.dispatch("MRadioGroup", "handleChange", this.model);
      });
    }
  }
};
</script>
