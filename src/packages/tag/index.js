import Tag from "./src/main";

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag;
