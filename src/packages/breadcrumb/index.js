import Breadcrumb from "./src/main";

/* istanbul ignore next */
Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;
