import Dropdown from "./src/main";

Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};

export default Dropdown;
