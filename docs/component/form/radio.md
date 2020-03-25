---
title: Radio 单选框
---

<script>
  export default {
    data() {
      return {
        model: "1",
        value: "1",
        group: "1",
        border: "1",
        button: "上海",
        modules: [
          {
            key: "basic",
            title: "基础用法",
            source: `<ml-radio v-model="model" label="1">选项一</ml-radio>
            <ml-radio v-model="model" label="2">选项二</ml-radio>`
          },
          {
            key: "disabled",
            title: "禁用状态",
            desc: "单选框不可用的状态。",
            tips: "你可以使用 <code>disabled</code> 属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。",
            source: ` <ml-radio v-model="value" label="1" disabled>选项一</ml-radio>
            <ml-radio v-model="value" label="2">选项二</ml-radio>
            <ml-radio v-model="value" label="3" disabled>选项三</ml-radio>`
          },
          {
            key: "group",
            title: "单选框组",
            desc: "适用于在多个互斥的选项中选择的场景",
            source: `<ml-radio-group v-model="group">
              <ml-radio label="1">选项一</ml-radio>
              <ml-radio label="2">选项二</ml-radio>
              <ml-radio label="3">选项三</ml-radio>
            </ml-radio-group>`
          },
          {
            key: "button",
            title: "单选框组",
            desc: "按钮样式的单选组合。",
            source: ` <ml-radio-group v-model="model">
              <ml-radio-button label="上海"></ml-radio-button>
              <ml-radio-button label="北京"></ml-radio-button>
              <ml-radio-button label="广州"></ml-radio-button>
              <ml-radio-button label="深圳"></ml-radio-button>
            </ml-radio-group>`
          },
          {
            key: "border",
            title: "带边框",
            tips: "设置 <code>border</code> 属性可以渲染为带有边框的单选框。",
            source: `<ml-radio v-model="border" label="1" border>备选项1</ml-radio>
            <ml-radio v-model="border" label="2" border>备选项2</ml-radio>
            <ml-radio v-model="border" label="3" border>备选项3</ml-radio>`
          }
        ]
      };
    },
    methods: {
      handleClick() {
        this.loading = true;
      }
    }
  };
</script>

<block title="Radio 单选框" desc="在一组备选项中进行单选" :modules="modules">
  <template slot="basic">
    <ml-radio v-model="model" label="1">选项一</ml-radio>
    <ml-radio v-model="model" label="2">选项二</ml-radio>
  </template>
  <template slot="disabled">
    <ml-radio v-model="value" label="1" disabled>选项一</ml-radio>
    <ml-radio v-model="value" label="2">选项二</ml-radio>
    <ml-radio v-model="value" label="3" disabled>选项三</ml-radio>
  </template>
  <template slot="group">
    <ml-radio-group v-model="group">
      <ml-radio label="1">选项一</ml-radio>
      <ml-radio label="2">选项二</ml-radio>
      <ml-radio label="3">选项三</ml-radio>
    </ml-radio-group>
  </template>
  <template slot="button">
    <ml-radio-group v-model="button">
      <ml-radio-button label="上海"></ml-radio-button>
      <ml-radio-button label="北京"></ml-radio-button>
      <ml-radio-button label="广州"></ml-radio-button>
      <ml-radio-button label="深圳"></ml-radio-button>
    </ml-radio-group>
  </template>
  <template slot="border">
    <ml-radio v-model="border" label="1" border>备选项1</ml-radio>
    <ml-radio v-model="border" label="2" border>备选项2</ml-radio>
    <ml-radio v-model="border" label="3" border>备选项3</ml-radio>
  </template>
</block>

### 属性

| 参数            | 说明                                 | 类型                      | 可选值                | 默认值 |
| --------------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                               | string / number / boolean | -                     | -      |
| label           | Radio 的 value                       | string / number / boolean | -                     | -      |
| disabled        | 禁用状态                             | blooean                   | -                     | false  |
| border          | 是否显示边框                         | boolean                   | -                     | false  |
| size            | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | -      |
| name            | 原生 name 属性                       | string                    | -                     | false  |
