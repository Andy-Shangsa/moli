<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ""
    };
  },
  methods: {
    handleAfterLeave() {
      this.$emit("after-leave");
    },
    setText(text) {
      this.text = text;
    }
  },
  render: function(h) {
    return h(
      "transition",
      {
        props: { name: "ml-loading-fade" },
        on: {
          "after-leave": this.handleAfterLeave
        }
      },
      [
        h(
          "div",
          {
            directives: [{ name: "show", value: this.visible }],
            class: [
              "ml-loading-mask",
              this.customClass,
              { "is-fullscreen": this.fullscreen }
            ],
            style: { backgroundColor: this.background || "" }
          },
          [
            h("div", { class: "ml-loading-spinner" }, [
              this.spinner
                ? h("i", { class: this.spinner })
                : h(
                    "svg",
                    {
                      class: "circular",
                      attrs: {
                        viewBox: "25 25 50 50"
                      }
                    },
                    [
                      h("circle", {
                        class: "path",
                        attrs: {
                          cx: 50,
                          cy: 50,
                          r: 20,
                          fill: "none"
                        }
                      })
                    ]
                  ),
              this.text ? h("p", { class: "ml-loading-text" }, this.text) : null
            ])
          ]
        )
      ]
    );
  }
};
</script>
