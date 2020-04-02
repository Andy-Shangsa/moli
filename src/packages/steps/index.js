import Steps from "./src/main";

/* istanbul ignore next */
Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

export default Steps;
