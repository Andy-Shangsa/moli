<template>
  <div class="ml-transfer-panel">
    <p class="ml-transfer-panel__header">
      <ml-checkbox
        v-model="allChecked"
        @change="handleAllCheckedChange"
        :indeterminate="isIndeterminate"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </ml-checkbox>
    </p>

    <div :class="['ml-transfer-panel__body', hasFooter ? 'is-with-footer' : '']">
      <ml-input
        class="ml-transfer-panel__filter"
        v-model="query"
        size="small"
        :placeholder="placeholder"
        @mouseenter.native="inputHover = true"
        @mouseleave.native="inputHover = false"
        v-if="filterable"
      >
        <i
          slot="prefix"
          :class="['ml-input__icon', 'ml-icon-' + inputIcon]"
          @click="clearQuery"
        ></i>
      </ml-input>
      <ml-checkbox-group
        v-model="checked"
        v-show="!hasNoMatch && data.length > 0"
        :class="{ 'is-filterable': filterable }"
        class="ml-transfer-panel__list"
      >
        <ml-checkbox
          class="ml-transfer-panel__item"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
          :key="item[keyProp]"
          v-for="item in filteredData"
        >
          <option-content :option="item"></option-content>
        </ml-checkbox>
      </ml-checkbox-group>
      <p
        class="ml-transfer-panel__empty"
        v-show="hasNoMatch"
      >{{ t('moli.transfer.noMatch') }}</p>
      <p
        class="ml-transfer-panel__empty"
        v-show="data.length === 0 && !hasNoMatch"
      >{{ t('moli.transfer.noData') }}</p>
    </div>
    <p
      class="ml-transfer-panel__footer"
      v-if="hasFooter"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script>
import MlCheckboxGroup from "../../checkbox-group";
import MlCheckbox from "../../checkbox";
import MlInput from "../../input";
import Locale from "../../../mixins/locale";
export default {
  mixins: [Locale],
  name: "MlTransferPanel",
  componentName: "MlTransferPanel",
  components: {
    MlCheckboxGroup,
    MlCheckbox,
    MlInput,
    OptionContent: {
      props: {
        option: Object
      },
      render(h) {
        const getParent = vm => {
          if (vm.$options.componentName === "MlTransferPanel") {
            return vm;
          } else if (vm.$parent) {
            return getParent(vm.$parent);
          } else {
            return vm;
          }
        };
        const panel = getParent(this);
        const transfer = panel.$parent || panel;
        return panel.renderContent
          ? panel.renderContent(h, this.option)
          : transfer.$scopedSlots.default
          ? transfer.$scopedSlots.default({ option: this.option })
          : h(
              "span",
              this.option[panel.labelProp] || this.option[panel.keyProp]
            );
      }
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object
  },
  data() {
    return {
      checked: [],
      allChecked: false,
      query: "",
      inputHover: false,
      checkChangeByUser: true
    };
  },
  watch: {
    checked(val, oldVal) {
      this.updateAllChecked();
      if (this.checkChangeByUser) {
        const movedKeys = val
          .concat(oldVal)
          .filter(v => val.indexOf(v) === -1 || oldVal.indexOf(v) === -1);
        this.$emit("checked-change", val, movedKeys);
      } else {
        this.$emit("checked-change", val);
        this.checkChangeByUser = true;
      }
    },
    data() {
      const checked = [];
      const filteredDataKeys = this.filteredData.map(
        item => item[this.keyProp]
      );
      this.checked.forEach(item => {
        if (filteredDataKeys.indexOf(item) > -1) {
          checked.push(item);
        }
      });
      this.checkChangeByUser = false;
      this.checked = checked;
    },
    checkableData() {
      this.updateAllChecked();
    },
    defaultChecked: {
      immediate: true,
      handler(val, oldVal) {
        if (
          oldVal &&
          val.length === oldVal.length &&
          val.every(item => oldVal.indexOf(item) > -1)
        )
          return;
        const checked = [];
        const checkableDataKeys = this.checkableData.map(
          item => item[this.keyProp]
        );
        val.forEach(item => {
          if (checkableDataKeys.indexOf(item) > -1) {
            checked.push(item);
          }
        });
        this.checkChangeByUser = false;
        this.checked = checked;
      }
    }
  },
  computed: {
    filteredData() {
      return this.data.filter(item => {
        if (typeof this.filterMethod === "function") {
          return this.filterMethod(this.query, item);
        } else {
          const label = item[this.labelProp] || item[this.keyProp].toString();
          return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }
      });
    },
    checkableData() {
      return this.filteredData.filter(item => !item[this.disabledProp]);
    },
    checkedSummary() {
      const checkedLength = this.checked.length;
      const dataLength = this.data.length;
      const { noChecked, hasChecked } = this.format;
      if (noChecked && hasChecked) {
        return checkedLength > 0
          ? hasChecked
              .replace(/\${checked}/g, checkedLength)
              .replace(/\${total}/g, dataLength)
          : noChecked.replace(/\${total}/g, dataLength);
      } else {
        return `${checkedLength}/${dataLength}`;
      }
    },
    isIndeterminate() {
      const checkedLength = this.checked.length;
      return checkedLength > 0 && checkedLength < this.checkableData.length;
    },
    hasNoMatch() {
      return this.query.length > 0 && this.filteredData.length === 0;
    },
    inputIcon() {
      return this.query.length > 0 && this.inputHover
        ? "circle-close"
        : "search";
    },
    labelProp() {
      return this.props.label || "label";
    },
    keyProp() {
      return this.props.key || "key";
    },
    disabledProp() {
      return this.props.disabled || "disabled";
    },
    hasFooter() {
      return !!this.$slots.default;
    }
  },
  methods: {
    updateAllChecked() {
      const checkableDataKeys = this.checkableData.map(
        item => item[this.keyProp]
      );
      this.allChecked =
        checkableDataKeys.length > 0 &&
        checkableDataKeys.every(item => this.checked.indexOf(item) > -1);
    },
    handleAllCheckedChange(value) {
      this.checked = value
        ? this.checkableData.map(item => item[this.keyProp])
        : [];
    },
    clearQuery() {
      if (this.inputIcon === "circle-close") {
        this.query = "";
      }
    }
  }
};
</script>
