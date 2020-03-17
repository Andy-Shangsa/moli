<!-- 按钮组 -->
<script>
export default {
  name: "MButtonGroup",
  render: function(h) {
    return h("div", { class: "ml-button-group" }, [
      this.$slots.default ? this.$slots.default : null
    ]);
  }
};
</script>
