import Button from "./packages/button";
import ButtonGroup from "./packages/button-group";

const components = {
  Button,
  ButtonGroup
};

const install = function(Vue, options = {}) {
  Object.values(components).map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
