<script>
export default {
  functional: true,
  name: "MlIcon",
  props: {
    name: String
  },
  render: function(h, ctx) {
    const { props } = ctx;
    return h("i", { class: `ml-icon-${props.name}` });
  }
};
</script>