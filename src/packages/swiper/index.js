import Swiper from "./src/main";

/* istanbul ignore next */
Swiper.install = function(Vue) {
  Vue.component(Swiper.name, Swiper);
};

export default Swiper;
