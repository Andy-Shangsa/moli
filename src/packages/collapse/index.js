import Collapse from "./src/main";

/* istanbul ignore next */
Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse);
};

export default Collapse;
