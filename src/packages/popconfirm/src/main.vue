<template>
  <ml-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
    <div class="ml-popconfirm">
      <p class="ml-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="ml-popconfirm__icon"
          :style="{color: iconColor}"
        ></i>
        {{title}}
      </p>
      <div class="ml-popconfirm__action">
        <ml-button
          size="mini"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{cancelButtonText}}
        </ml-button>
        <ml-button
          size="mini"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{confirmButtonText}}
        </ml-button>
      </div>
    </div>
    <slot
      name="reference"
      slot="reference"
    ></slot>
  </ml-popover>
</template>

<script>
import MlPopover from "../../popover";
import MlButton from "../../button";
import { t } from "../../../locale";
export default {
  name: "MlPopconfirm",
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t("moli.popconfirm.confirmButtonText")
    },
    cancelButtonText: {
      type: String,
      default: t("moli.popconfirm.cancelButtonText")
    },
    confirmButtonType: {
      type: String,
      default: "primary"
    },
    cancelButtonType: {
      type: String,
      default: "text"
    },
    icon: {
      type: String,
      default: "ml-icon-help"
    },
    iconColor: {
      type: String,
      default: "#f90"
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MlPopover,
    MlButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit("onConfirm");
    },
    cancel() {
      this.visible = false;
      this.$emit("onCancel");
    }
  }
};
</script>
