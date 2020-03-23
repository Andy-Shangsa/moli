import MoliUI from "../../src/index.js";
import hljs from "highlight.js";
import "../../src/styles/index.scss";
import "./public/index.scss";
import "./public/table.scss";
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import "highlight.js/styles/atom-one-dark-reasonable.css";

export default ({ Vue }) => {
  Vue.directive("highlight", function(el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  });
  Vue.use(MoliUI);
};
