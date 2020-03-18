import Radio from "./src/main";

Radio.install = function(Vue) {
  Vue.component(Radio.name, Radio);
};

export default Radio;
