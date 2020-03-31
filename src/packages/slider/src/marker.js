export default {
  name: "MlMarker",

  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    let label = typeof this.mark === "string" ? this.mark : this.mark.label;
    return h(
      "div",
      { class: "ml-slider__marks-text", style: this.mark.style || {} },
      label
    );
  }
};
