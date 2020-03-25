import OptionGroup from "../select/src/option-group";

/* istanbul ignore next */
OptionGroup.install = function(Vue) {
  Vue.component(OptionGroup.name, OptionGroup);
};

export default OptionGroup;
