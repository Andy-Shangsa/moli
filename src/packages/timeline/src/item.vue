<script>
export default {
  name: "MlTimelineItem",
  inject: ["timeline"],
  props: {
    timestamp: String,
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom"
    },
    type: String,
    color: String,
    size: {
      type: String,
      default: "normal"
    },
    icon: String
  },
  render: function(h) {
    return h("li", { class: "ml-timeline-item" }, [
      h("div", { class: "ml-timeline-item__tail" }),
      this.$slots.dot
        ? h("div", { class: "ml-timeline-item__dot" }, this.$slots.dot)
        : h(
            "div",
            {
              class: [
                "ml-timeline-item__node",
                `ml-timeline-item__node--${this.size || ""}`,
                `ml-timeline-item__node--${this.type || ""}`
              ],
              style: {
                backgroundColor: this.color
              }
            },
            [
              this.icon
                ? h("i", { class: ["ml-timeline-item__icon", this.icon] })
                : null
            ]
          ),
      h("div", { class: "ml-timeline-item__wrapper" }, [
        !this.hideTimestamp && this.placement === "top"
          ? h(
              "div",
              { class: "ml-timeline-item__timestamp is-top" },
              this.timestamp
            )
          : null,
        h("div", { class: "ml-timeline-item__content" }, this.$slots.default),
        !this.hideTimestamp && this.placement === "bottom"
          ? h(
              "div",
              { class: "ml-timeline-item__timestamp is-bottom" },
              this.timestamp
            )
          : null
      ])
    ]);
  }
};
</script>
