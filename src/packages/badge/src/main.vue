<script>
export default {
  name: "MlBadge",
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return (
          ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1
        );
      }
    }
  },
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    }
  },
  render: function(h) {
    return h("div", { class: "ml-badge" }, [
      this.$slots.default,
      h("transition", { props: { name: "ml-zoom-in-center" } }, [
        h(
          "sup",
          {
            class: [
              "ml-badge__content",
              "ml-badge__content--" + this.type,
              {
                "is-fixed": this.$slots.default,
                "is-dot": this.isDot
              }
            ],
            directives: [
              {
                name: "show",
                value:
                  !this.hidden &&
                  (this.content || this.content === 0 || this.isDot)
              }
            ]
          },
          this.content
        )
      ])
    ]);
  }
};
</script>
