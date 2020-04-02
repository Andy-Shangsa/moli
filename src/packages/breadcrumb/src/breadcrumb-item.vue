<script>
export default {
  name: "MlBreadcrumbItem",
  props: {
    to: {},
    replace: Boolean
  },
  data() {
    return {
      separator: "",
      separatorClass: ""
    };
  },
  inject: ["mlBreadcrumb"],
  mounted() {
    this.separator = this.mlBreadcrumb.separator;
    this.separatorClass = this.mlBreadcrumb.separatorClass;
    const link = this.$refs.link;
    link.setAttribute("role", "link");
    link.addEventListener("click", _ => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    });
  },
  render: function(h) {
    return h("div", { class: "ml-breadcrumb__item" }, [
      h(
        "span",
        {
          ref: "link",
          attrs: { role: "link" },
          class: ["ml-breadcrumb__inner", this.to ? "is-link" : ""]
        },
        this.$slots.default
      ),
      this.separatorClass
        ? h("i", { class: ["ml-breadcrumb__separator", this.separatorClass] })
        : h(
            "span",
            {
              class: "ml-breadcrumb__separator",
              attrs: { role: "presentation" }
            },
            this.separator
          )
    ]);
  }
};
</script>