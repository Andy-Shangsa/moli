import Option from '../select/src/option.vue';

/* istanbul ignore next */
Option.install = function(Vue) {
  Vue.component(Option.name, Option);
};

export default Option;