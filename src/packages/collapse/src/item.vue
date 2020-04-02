<template>
  <div
    class="ml-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`ml-collapse-content-${id}`"
      :aria-describedby="`ml-collapse-content-${id}`"
    >
      <div
        class="ml-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`ml-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="ml-collapse-item__arrow ml-icon-arrow-right"
          :class="{'is-active': isActive}"
        >
        </i>
      </div>
    </div>
    <ml-collapse-transition>
      <div
        class="ml-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`ml-collapse-head-${id}`"
        :id="`ml-collapse-content-${id}`"
      >
        <div class="ml-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </ml-collapse-transition>
  </div>
</template>
<script>
import MlCollapseTransition from "../../../utils/collapse-transition";
import Emitter from "../../../mixins/emitter";
import { generateId } from "../../../utils/util";
export default {
  name: "MlCollapseItem",
  componentName: "MlCollapseItem",
  mixins: [Emitter],
  components: { MlCollapseTransition },
  data() {
    return {
      contentWrapStyle: {
        height: "auto",
        display: "block"
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId()
    };
  },
  inject: ["collapse"],
  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      }
    },
    disabled: Boolean
  },
  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },
  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true;
        } else {
          this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick() {
      if (this.disabled) return;
      this.dispatch("MlCollapse", "item-click", this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick() {
      this.dispatch("MlCollapse", "item-click", this);
    }
  }
};
</script>
