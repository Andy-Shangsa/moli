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
import InputNumber from "./packages/input-number";
import Select from "./packages/select";
import Option from "./packages/option";
import OptionGroup from "./packages/option-group";
import Tag from "./packages/tag";
import Tooltip from "./packages/tooltip";
import Message from "./packages/message";
import MessageBox from "./packages/message-box";
import Notify from "./packages/notify";
import Alert from "./packages/alert";
import Loading from "./packages/loading";
import Row from "./packages/row";
import Col from "./packages/col";
import Table from "./packages/table";
import TableColumn from "./packages/table-column";
import Slider from "./packages/slider";
import Badge from "./packages/badge";

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
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Tag,
  Tooltip,
  Alert,
  Row,
  Col,
  Table,
  TableColumn,
  Slider,
  Badge
};

const install = function(Vue, opts = {}) {
  Object.values(components).map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$MOLI = {
    size: opts.size || "",
    zIndex: opts.zIndex || 2000
  };
  Vue.use(Loading.directive);
  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notify;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$loading = Loading.service;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
