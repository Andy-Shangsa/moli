<script>
export default {
  name: "MlBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    },
    separatorClass: {
      type: String,
      default: ""
    }
  },
  provide() {
    return {
      mlBreadcrumb: this
    };
  },
  mounted() {
    const items = this.$el.querySelectorAll(".ml-breadcrumb__item");
    if (items.length) {
      items[items.length - 1].setAttribute("aria-current", "page");
    }
  },
  render: function(h) {
    return h(
      "div",
      {
        class: "ml-breadcrumb",
        attrs: {
          "aria-label": "Breadcrumb",
          role: "navigation"
        }
      },
      this.$slots.default
    );
  }
};
</script>
