import Progress from "./src/main";

/* istanbul ignore next */
Progress.install = function(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress;
