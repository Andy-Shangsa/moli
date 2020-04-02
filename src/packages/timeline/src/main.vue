<script>
export default {
  name: "MlTimeline",
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      timeline: this
    };
  },
  render: function(h) {
    const reverse = this.reverse;
    const classes = {
      "ml-timeline": true,
      "is-reverse": reverse
    };
    let slots = this.$slots.default || [];
    if (reverse) {
      slots = slots.reverse();
    }
    return h("ul", { class: classes }, slots);
  }
};
</script>