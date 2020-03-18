import Button from "./packages/button";
import ButtonGroup from "./packages/button-group";
import Radio from "./packages/radio";
import RadioGroup from "./packages/radio-group";

const components = {
  Button,
  ButtonGroup,
  Radio,
  RadioGroup
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
