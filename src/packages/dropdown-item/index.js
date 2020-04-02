import DropdownItem from "../dropdown/src/dropdown-item";

/* istanbul ignore next */
DropdownItem.install = function(Vue) {
  Vue.component(DropdownItem.name, DropdownItem);
};

export default DropdownItem;
