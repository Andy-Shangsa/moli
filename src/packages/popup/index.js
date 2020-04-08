import Popup from "./src/main";

Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup);
};

export default Popup;
