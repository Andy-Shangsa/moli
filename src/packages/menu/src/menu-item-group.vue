<template>
  <li class="ml-menu-item-group">
    <div
      class="ml-menu-item-group__title"
      :style="{paddingLeft: levelPadding + 'px'}"
    >
      <template v-if="!$slots.title">{{title}}</template>
      <slot
        v-else
        name="title"
      ></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "MlMenuItemGroup",
  componentName: "MlMenuItemGroup",
  inject: ["rootMenu"],
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      paddingLeft: 20
    };
  },
  computed: {
    levelPadding() {
      let padding = 20;
      let parent = this.$parent;
      if (this.rootMenu.collapse) return 20;
      while (parent && parent.$options.componentName !== "MlMenu") {
        if (parent.$options.componentName === "MlSubmenu") {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return padding;
    }
  }
};
</script>
