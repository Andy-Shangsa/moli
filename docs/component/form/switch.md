---
title: Switch 开关
---

<script>
  export default {
    data() {
      return {
        value: false,
        value2: false,
        text: false,
        text2: false,
        disabled: false,
        disabled2: true,
        model: "0",
        modules: [
          {
            key: "basic",
            title: "基础用法",
            source: `<ml-switch v-model="value"></ml-switch>
            <ml-switch 
            v-model="value2" 
            active-color="#13ce66" 
            inactive-color="#ff4949" 
            active-text="按月付费" 
            inactive-text="按年付费">
            </ml-switch>`
          },
          {
            key: "text",
            title: "文字描述",
            source: ` <ml-switch v-model="text" active-text="男性" inactive-text="女性">
            </ml-switch>
            <ml-switch v-model="text2" active-color="#13ce66" inactive-color="#ff4949"
              active-text="男性" inactive-text="女性">
            </ml-switch>`
          },
          {
            key: "disabled",
            title: "禁用状态",
            source: ` <ml-switch v-model="disabled" disabled>
            </ml-switch>
            <ml-switch v-model="disabled2" disabled>
            </ml-switch>`
          },
          {
            key: "value",
            title: "扩展value",
            source: `<ml-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0">
            </ml-switch>`
          },
        ]
      };
    }
  };
</script>

<block title="Switch 开关" desc="表示两种相互对立的状态间的切换，多用于触发「开/关」。" :modules="modules">
  <template slot="basic">
    <ml-switch v-model="value"></ml-switch>
    <ml-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
    </ml-switch>
  </template>
  <template slot="text">
    <ml-switch v-model="text" active-text="男性" inactive-text="女性">
    </ml-switch>
    <ml-switch v-model="text2" active-color="#13ce66" inactive-color="#ff4949" active-text="男性" inactive-text="女性">
    </ml-switch>
  </template>
  <template slot="disabled">
    <ml-switch v-model="disabled" disabled>
    </ml-switch>
    <ml-switch v-model="disabled2" disabled>
    </ml-switch>
  </template>
  <template slot="value">
    <ml-tooltip :content="'Switch value: ' + model" placement="top">
      <ml-switch v-model="model" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0">
      </ml-switch>
    </ml-tooltip>
  </template>
</block>

<style lang="scss">
  .ml-switch {
    margin: 10px 20px;
  }
</style>

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --------------- | -------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值 | string / number / boolean | - | - |
| disabled | 禁用状态 | blooean | - | false |