import Col from './src/main';

/* istanbul ignore next */
Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;