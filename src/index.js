import Alert from "./packages/alert";
import Backtop from "./packages/backtop";
import Badge from "./packages/badge";
import Breadcrumb from "./packages/breadcrumb";
import BreadcrumbItem from "./packages/breadcrumb-item";
import Button from "./packages/button";
import ButtonGroup from "./packages/button-group";
import Cascader from "./packages/cascader";
import CascaderPanel from "./packages/cascader-panel";
import Checkbox from "./packages/checkbox";
import CheckboxButton from "./packages/checkbox-button";
import CheckboxGroup from "./packages/checkbox-group";
import Col from "./packages/col";
import Collapse from "./packages/collapse";
import CollapseItem from "./packages/collapse-item";
import ColorPicker from "./packages/color-picker";
import DatePicker from "./packages/date-picker";
import Dialog from "./packages/dialog";
import Dropdown from "./packages/dropdown";
import DropdownItem from "./packages/dropdown-item";
import DropdownMenu from "./packages/dropdown-menu";
import Form from "./packages/form";
import FormItem from "./packages/form-item";
import Icon from "./packages/icon";
import Image from "./packages/image";
import Input from "./packages/input";
import InputNumber from "./packages/input-number";
import Loading from "./packages/loading";
import Menu from "./packages/menu";
import MenuItem from "./packages/menu-item";
import MenuItemGroup from "./packages/menu-item-group";
import Message from "./packages/message";
import MessageBox from "./packages/message-box";
import Notify from "./packages/notify";
import Option from "./packages/option";
import OptionGroup from "./packages/option-group";
import Pagination from "./packages/pagination";
import Popconfirm from "./packages/popconfirm";
import Popover from "./packages/popover";
import Popup from "./packages/popup";
import Progress from "./packages/progress";
import Radio from "./packages/radio";
import RadioGroup from "./packages/radio-group";
import RadioButton from "./packages/radio-button";
import Rate from "./packages/rate";
import Row from "./packages/row";
import Select from "./packages/select";
import Slider from "./packages/slider";
import Step from "./packages/step";
import Steps from "./packages/steps";
import Submenu from "./packages/submenu";
import Swiper from "./packages/swiper";
import SwiperItem from "./packages/swiper-item";
import Switch from "./packages/switch";
import Table from "./packages/table";
import TableColumn from "./packages/table-column";
import Tag from "./packages/tag";
import TimePicker from "./packages/time-picker";
import TimeSelect from "./packages/time-select";
import Timeline from "./packages/timeline";
import TimelineItem from "./packages/timeline-item";
import Tooltip from "./packages/tooltip";
import Transfer from "./packages/transfer";
import Upload from "./packages/upload";

const components = {
  Alert,
  Button,
  ButtonGroup,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Form,
  FormItem,
  Icon,
  Input,
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Tag,
  TimePicker,
  TimeSelect,
  Tooltip,
  Row,
  Col,
  Table,
  TableColumn,
  Slider,
  Badge,
  Progress,
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Step,
  Steps,
  Backtop,
  Timeline,
  TimelineItem,
  Collapse,
  CollapseItem,
  ColorPicker,
  DatePicker,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Popover,
  Popconfirm,
  Image,
  Swiper,
  SwiperItem,
  Rate,
  Popup,
  Dialog,
  Transfer,
  Upload
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
