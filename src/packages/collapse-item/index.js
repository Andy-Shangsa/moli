import CollapseItem from "../collapse/src/item";

/* istanbul ignore next */
CollapseItem.install = function(Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
};

export default CollapseItem;
