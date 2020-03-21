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
  Input
};

const install = function(Vue, options = {}) {
  Object.values(components).map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};