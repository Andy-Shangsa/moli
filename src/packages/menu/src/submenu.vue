<script>
import MlCollapseTransition from "../../../utils/collapse-transition";
import menuMixin from "./menu-mixin";
import Emitter from "../../../mixins/emitter";
import Popper from "../../../utils/vue-popper";
const poperMixins = {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: false
    },
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions
  },
  data: Popper.data,
  methods: Popper.methods,
  beforeDestroy: Popper.beforeDestroy,
  deactivated: Popper.deactivated
};
export default {
  name: "MlSubmenu",
  componentName: "MlSubmenu",
  mixins: [menuMixin, Emitter, poperMixins],
  components: { MlCollapseTransition },
  props: {
    index: {
      type: String,
      required: true
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    hideTimeout: {
      type: Number,
      default: 300
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined
    }
  },
  data() {
    return {
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      mouseInChild: false
    };
  },
  watch: {
    opened(val) {
      if (this.isMenuPopup) {
        this.$nextTick(_ => {
          this.updatePopper();
        });
      }
    }
  },
  computed: {
    // popper option
    appendToBody() {
      return this.popperAppendToBody === undefined
        ? this.isFirstLevel
        : this.popperAppendToBody;
    },
    menuTransitionName() {
      return this.rootMenu.collapse ? "ml-zoom-in-left" : "ml-zoom-in-top";
    },
    opened() {
      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
    },
    active() {
      let isActive = false;
      const submenus = this.submenus;
      const items = this.items;
      Object.keys(items).forEach(index => {
        if (items[index].active) {
          isActive = true;
        }
      });
      Object.keys(submenus).forEach(index => {
        if (submenus[index].active) {
          isActive = true;
        }
      });
      return isActive;
    },
    hoverBackground() {
      return this.rootMenu.hoverBackground;
    },
    backgroundColor() {
      return this.rootMenu.backgroundColor || "";
    },
    activeTextColor() {
      return this.rootMenu.activeTextColor || "";
    },
    textColor() {
      return this.rootMenu.textColor || "";
    },
    mode() {
      return this.rootMenu.mode;
    },
    isMenuPopup() {
      return this.rootMenu.isMenuPopup;
    },
    titleStyle() {
      if (this.mode !== "horizontal") {
        return {
          color: this.textColor
        };
      }
      return {
        borderBottomColor: this.active
          ? this.rootMenu.activeTextColor
            ? this.activeTextColor
            : ""
          : "transparent",
        color: this.active ? this.activeTextColor : this.textColor
      };
    },
    isFirstLevel() {
      let isFirstLevel = true;
      let parent = this.$parent;
      while (parent && parent !== this.rootMenu) {
        if (
          ["MlSubmenu", "MlMenuItemGroup"].indexOf(
            parent.$options.componentName
          ) > -1
        ) {
          isFirstLevel = false;
          break;
        } else {
          parent = parent.$parent;
        }
      }
      return isFirstLevel;
    }
  },
  methods: {
    handleCollapseToggle(value) {
      if (value) {
        this.initPopper();
      } else {
        this.doDestroy();
      }
    },
    addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem(item) {
      delete this.items[item.index];
    },
    addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    handleClick() {
      const { rootMenu, disabled } = this;
      if (
        (rootMenu.menuTrigger === "hover" && rootMenu.mode === "horizontal") ||
        (rootMenu.collapse && rootMenu.mode === "vertical") ||
        disabled
      ) {
        return;
      }
      this.dispatch("MlMenu", "submenu-click", this);
    },
    handleMouseenter(event, showTimeout = this.showTimeout) {
      if (
        !("ActiveXObject" in window) &&
        event.type === "focus" &&
        !event.relatedTarget
      ) {
        return;
      }
      const { rootMenu, disabled } = this;
      if (
        (rootMenu.menuTrigger === "click" && rootMenu.mode === "horizontal") ||
        (!rootMenu.collapse && rootMenu.mode === "vertical") ||
        disabled
      ) {
        return;
      }
      this.dispatch("MlSubmenu", "mouse-enter-child");
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.rootMenu.openMenu(this.index, this.indexPath);
      }, showTimeout);
      if (this.appendToBody) {
        this.$parent.$el.dispatchEvent(new MouseEvent("mouseenter"));
      }
    },
    handleMouseleave(deepDispatch = false) {
      const { rootMenu } = this;
      if (
        (rootMenu.menuTrigger === "click" && rootMenu.mode === "horizontal") ||
        (!rootMenu.collapse && rootMenu.mode === "vertical")
      ) {
        return;
      }
      this.dispatch("MlSubmenu", "mouse-leave-child");
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        !this.mouseInChild && this.rootMenu.closeMenu(this.index);
      }, this.hideTimeout);
      if (this.appendToBody && deepDispatch) {
        if (this.$parent.$options.name === "ElSubmenu") {
          this.$parent.handleMouseleave(true);
        }
      }
    },
    handleTitleMouseenter() {
      if (this.mode === "horizontal" && !this.rootMenu.backgroundColor) return;
      const title = this.$refs["submenu-title"];
      title && (title.style.backgroundColor = this.rootMenu.hoverBackground);
    },
    handleTitleMouseleave() {
      if (this.mode === "horizontal" && !this.rootMenu.backgroundColor) return;
      const title = this.$refs["submenu-title"];
      title &&
        (title.style.backgroundColor = this.rootMenu.backgroundColor || "");
    },
    updatePlacement() {
      this.currentPlacement =
        this.mode === "horizontal" && this.isFirstLevel
          ? "bottom-start"
          : "right-start";
    },
    initPopper() {
      this.referenceElm = this.$el;
      this.popperElm = this.$refs.menu;
      this.updatePlacement();
    }
  },
  created() {
    this.$on("toggle-collapse", this.handleCollapseToggle);
    this.$on("mouse-enter-child", () => {
      this.mouseInChild = true;
      clearTimeout(this.timeout);
    });
    this.$on("mouse-leave-child", () => {
      this.mouseInChild = false;
      clearTimeout(this.timeout);
    });
  },
  mounted() {
    this.parentMenu.addSubmenu(this);
    this.rootMenu.addSubmenu(this);
    this.initPopper();
  },
  beforeDestroy() {
    this.parentMenu.removeSubmenu(this);
    this.rootMenu.removeSubmenu(this);
  },
  render(h) {
    const {
      active,
      opened,
      paddingStyle,
      titleStyle,
      backgroundColor,
      rootMenu,
      currentPlacement,
      menuTransitionName,
      mode,
      disabled,
      popperClass,
      $slots,
      isFirstLevel
    } = this;
    const popupMenu = h("transition", { props: { name: menuTransitionName } }, [
      h(
        "div",
        {
          ref: "menu",
          class: [`ml-menu--${mode}`, popperClass],
          directives: [{ name: "show", value: opened }],
          on: {
            mouseenter: e => {
              this.handleMouseenter(e, 100);
            },
            mouseleave: () => {
              this.handleMouseleave(true);
            },
            focus: e => {
              this.handleMouseenter(e, 100);
            }
          }
        },
        [
          h(
            "ul",
            {
              attrs: { role: "menu" },
              class: [
                "ml-menu ml-menu--popup",
                `ml-menu--popup-${currentPlacement}`
              ],
              style: { backgroundColor: rootMenu.backgroundColor || "" }
            },
            $slots.default
          )
        ]
      )
    ]);
    const inlineMenu = h("ml-collapse-transition", [
      h(
        "ul",
        {
          class: "ml-menu ml-menu--inline",
          attrs: {
            role: "menu"
          },
          style: { backgroundColor: rootMenu.backgroundColor || "" },
          directives: [
            {
              name: "show",
              value: opened
            }
          ]
        },
        $slots.default
      )
    ]);
    const submenuTitleIcon =
      (rootMenu.mode === "horizontal" && isFirstLevel) ||
      (rootMenu.mode === "vertical" && !rootMenu.collapse)
        ? "ml-icon-arrow-down"
        : "ml-icon-arrow-right";
    return h(
      "li",
      {
        class: {
          "ml-submenu": true,
          "is-active": active,
          "is-opened": opened,
          "is-disabled": disabled
        },
        attrs: {
          role: "menuitem",
          "aria-haspopup": true,
          "aria-expanded": opened
        },
        on: {
          mouseenter: this.handleMouseenter,
          mouseleave: () => {
            this.handleMouseleave(false);
          },
          focus: this.handleMouseenter
        }
      },
      [
        h(
          "div",
          {
            class: "ml-submenu__title",
            ref: "submenu-title",
            style: [paddingStyle, titleStyle, { backgroundColor }],
            on: {
              mouseenter: this.handleTitleMouseenter,
              mouseleave: this.handleTitleMouseleave,
              click: this.handleClick
            }
          },
          [
            $slots.title,
            h("i", { class: ["ml-submenu__icon-arrow", submenuTitleIcon] })
          ]
        ),
        this.isMenuPopup ? popupMenu : inlineMenu
      ]
    );
  }
};
</script>
