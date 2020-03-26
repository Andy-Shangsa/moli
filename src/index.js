import Button from "./packages/button";
import ButtonGroup from "./packages/button-group";
import Radio from "./packages/radio";
import RadioGroup from "./packages/radio-group";
import RadioButton from "./packages/radio-button";
import Checkbox from "./packages/checkbox";
import CheckboxButton from "./packages/checkbox-button";
import CheckboxGroup from "./packages/checkbox-group";
import Switch from "./packages/switch";
import Form from "./packages/form";
import FormItem from "./packages/form-item";
import Input from "./packages/input";
import Select from "./packages/select";
import Option from "./packages/option";
import OptionGroup from "./packages/option-group";
import Tag from "./packages/tag";
import Tooltip from "./packages/tooltip";
import Message from "./packages/message";
import Notify from "./packages/notify";

const components = {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  OptionGroup,
  Tag,
  Tooltip
};

const install = function(Vue, opts = {}) {
  Object.values(components).map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$MOLI = {
    size: opts.size || "",
    zIndex: opts.zIndex || 2000
  };
  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notify;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
