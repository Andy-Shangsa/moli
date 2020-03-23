---
title: Button 按钮
---

<script>
  export default {
    data() {
      return {
        loading: false,
        modules: [
          {
            key: "basic",
            title: "基础用法",
            source: `<ml-button>默认</ml-button>
            <ml-button type="primary">主要</ml-button>
            <ml-button type="success">成功</ml-button>
            <ml-button type="warning">警告</ml-button>
            <ml-button type="danger">危险</ml-button>
            <ml-button type="info">提示</ml-button>
            <ml-button type="text">文字</ml-button>`
          },
          {
            key: "plain",
            title: "幽灵按钮",
            source: `<ml-button plain>默认</ml-button>
            <ml-button type="primary" plain>主要</ml-button>
            <ml-button type="success" plain>成功</ml-button>
            <ml-button type="warning" plain>警告</ml-button>
            <ml-button type="danger" plain>危险</ml-button>
            <ml-button type="info" plain>提示</ml-button>`
          },
          {
            key: "round",
            title: "圆角按钮",
            source: ` <ml-button round>默认</ml-button>
            <ml-button type="primary" round>主要</ml-button>
            <ml-button type="success" round>成功</ml-button>
            <ml-button type="warning" round>警告</ml-button>
            <ml-button type="danger" round>危险</ml-button>
            <ml-button type="info" round>提示</ml-button>`
          },
          {
            key: "disabled",
            title: "禁用按钮",
            tips: "你可以使用 <code>disabled</code> 属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。",
            source: `<ml-button disabled>默认</ml-button>
            <ml-button type="primary" disabled>主要</ml-button>
            <ml-button type="success" disabled>成功</ml-button>
            <ml-button type="warning" disabled>警告</ml-button>
            <ml-button type="danger" disabled>危险</ml-button>
            <ml-button type="info" disabled>提示</ml-button>`
          },
          {
            key: "icon",
            title: "图标按钮",
            tips: "设置 <code>icon</code> 属性即可,没有文字的圆角图标按钮显示为圆形",
            source: `<ml-button icon="ml-icon-share">默认</ml-button>
            <ml-button type="warning" icon="ml-icon-delete" round>圆角</ml-button>
            <ml-button type="primary" icon="ml-icon-favorite"></ml-button>
            <ml-button type="success" icon="ml-icon-module" round></ml-button>`
          },
          {
            key: "size",
            title: "不同尺寸",
            tips: "额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置size属性来配置它们。",
            source: ` <ml-button type="primary">默认</ml-button>
            <ml-button type="primary" size="medium">中等</ml-button>
            <ml-button type="primary" size="small">小型</ml-button>
            <ml-button type="primary" size="mini">超小</ml-button>`
          },
          {
            key: "group",
            title: "按钮组",
            source: `<ml-button-group>
              <ml-button type="primary" icon="ml-icon-arrow-left">上一页</ml-button>
              <ml-button type="primary">
                <span>下一页</span>
                <i class="ml-icon-arrow-right"></i>
              </ml-button>
            </ml-button-group>
            <ml-button-group>
              <ml-button type="primary" icon="ml-icon-share"></ml-button>
              <ml-button type="primary" icon="ml-icon-delete"></ml-button>
              <ml-button type="primary" icon="ml-icon-favorite"></ml-button>
            </ml-button-group>`
          },
          {
            key: "loading",
            title: "加载中...",
            source: ` <ml-button 
            type="primary" 
            icon="ml-icon-icon_work_fill" 
            :loading="loading" 
            @click="handleClick">点我试试</ml-button>
            <ml-button type="primary" loading>圆角</ml-button>`
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

<block title="Button 按钮" desc="常用的操作按钮。" :modules="modules">
  <template slot="basic">
    <ml-button>默认</ml-button>
    <ml-button type="primary">主要</ml-button>
    <ml-button type="success">成功</ml-button>
    <ml-button type="warning">警告</ml-button>
    <ml-button type="danger">危险</ml-button>
    <ml-button type="info">提示</ml-button>
    <ml-button type="text">文字</ml-button>
  </template>
  <template slot="plain">
    <ml-button plain>默认</ml-button>
    <ml-button type="primary" plain>主要</ml-button>
    <ml-button type="success" plain>成功</ml-button>
    <ml-button type="warning" plain>警告</ml-button>
    <ml-button type="danger" plain>危险</ml-button>
    <ml-button type="info" plain>提示</ml-button>
  </template>
  <template slot="round">
    <ml-button round>默认</ml-button>
    <ml-button type="primary" round>主要</ml-button>
    <ml-button type="success" round>成功</ml-button>
    <ml-button type="warning" round>警告</ml-button>
    <ml-button type="danger" round>危险</ml-button>
    <ml-button type="info" round>提示</ml-button>
  </template>
  <template slot="disabled">
    <ml-button disabled>默认</ml-button>
    <ml-button type="primary" disabled>主要</ml-button>
    <ml-button type="success" disabled>成功</ml-button>
    <ml-button type="warning" disabled>警告</ml-button>
    <ml-button type="danger" disabled>危险</ml-button>
    <ml-button type="info" disabled>提示</ml-button>
  </template>
  <template slot="icon">
    <ml-button icon="ml-icon-share">默认</ml-button>
    <ml-button type="warning" icon="ml-icon-delete" round>圆角</ml-button>
    <ml-button type="primary" icon="ml-icon-favorite"></ml-button>
    <ml-button type="success" icon="ml-icon-module" round></ml-button>
  </template>
  <template slot="size">
    <ml-button type="primary">默认</ml-button>
    <ml-button type="primary" size="medium">中等</ml-button>
    <ml-button type="primary" size="small">小型</ml-button>
    <ml-button type="primary" size="mini">超小</ml-button>
  </template>
  <template slot="group">
    <ml-button-group>
      <ml-button type="primary" icon="ml-icon-arrow-left">上一页</ml-button>
      <ml-button type="primary">
        <span>下一页</span>
        <i class="ml-icon-arrow-right"></i>
      </ml-button>
    </ml-button-group>
    <ml-button-group>
      <ml-button type="primary" icon="ml-icon-share"></ml-button>
      <ml-button type="primary" icon="ml-icon-delete"></ml-button>
      <ml-button type="primary" icon="ml-icon-favorite"></ml-button>
    </ml-button-group>
  </template>
  <template slot="loading">
    <ml-button type="primary" icon="ml-icon-icon_work_fill" :loading="loading" @click="handleClick">点我试试</ml-button>
    <ml-button type="primary" loading>圆角</ml-button>
  </template>
</block>

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type | 按钮类型 | string | primary / success / warning / danger / info / text | - |
| size | 按钮尺寸 | string | medium / small / mini | - |
| plain | 是否幽灵按钮 | boolean | - | false |
| round | 圆角按钮 | boolean | - | false |
| loading | 加载状态 | blooean | - | false |
| disabled | 禁用状态 | blooean | - | false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
| icon | 图标 | string | - | - |
| autofocus | 是否默认聚焦 | boolean | - | false |