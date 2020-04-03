import SwiperItem from "../swiper/src/item";

/* istanbul ignore next */
SwiperItem.install = function(Vue) {
  Vue.component(SwiperItem.name, SwiperItem);
};

export default SwiperItem;
