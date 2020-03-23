---
title: Button 按钮
---
### 按钮

#### 基础用法 <Badge text="type" type="warning"/>

---

<template>
<ml-button>默认</ml-button>
<ml-button type="primary">主要</ml-button>
<ml-button type="success">成功</ml-button>
<ml-button type="warning">警告</ml-button>
<ml-button type="danger">危险</ml-button>
<ml-button type="info">提示</ml-button>
<ml-button type="text">文字</ml-button>
</template>

```html
<ml-button>默认</ml-button>
<ml-button type="primary">主要</ml-button>
<ml-button type="success">成功</ml-button>
<ml-button type="warning">警告</ml-button>
<ml-button type="danger">危险</ml-button>
<ml-button type="info">提示</ml-button>
<ml-button type="text">文字</ml-button>
```

#### 幽灵按钮 <Badge text="plain" type="warning"/>

---

<template>
<ml-button plain>默认</ml-button>
<ml-button type="primary" plain>主要</ml-button>
<ml-button type="success" plain>成功</ml-button>
<ml-button type="warning" plain>警告</ml-button>
<ml-button type="danger" plain>危险</ml-button>
<ml-button type="info" plain>提示</ml-button>
</template>

```html
<ml-button plain>默认</ml-button>
<ml-button type="primary" plain>主要</ml-button>
<ml-button type="success" plain>成功</ml-button>
<ml-button type="warning" plain>警告</ml-button>
<ml-button type="danger" plain>危险</ml-button>
<ml-button type="info" plain>提示</ml-button>
```

#### 圆角按钮 <Badge text="round" type="warning"/>

---

<template>
<ml-button round>默认</ml-button>
<ml-button type="primary" round>主要</ml-button>
<ml-button type="success" round>成功</ml-button>
<ml-button type="warning" round>警告</ml-button>
<ml-button type="danger" round>危险</ml-button>
<ml-button type="info" round>提示</ml-button>
</template>

```html
<ml-button round>默认</ml-button>
<ml-button type="primary" round>主要</ml-button>
<ml-button type="success" round>成功</ml-button>
<ml-button type="warning" round>警告</ml-button>
<ml-button type="danger" round>危险</ml-button>
<ml-button type="info" round>提示</ml-button>
```

#### 禁用按钮 <Badge text="disabled" type="warning"/>

---

<template>
<ml-button disabled>默认</ml-button>
<ml-button type="primary" disabled>主要</ml-button>
<ml-button type="success" disabled>成功</ml-button>
<ml-button type="warning" disabled>警告</ml-button>
<ml-button type="danger" disabled>危险</ml-button>
<ml-button type="info" disabled>提示</ml-button>
</template>

```html
<ml-button disabled>默认</ml-button>
<ml-button type="primary" disabled>主要</ml-button>
<ml-button type="success" disabled>成功</ml-button>
<ml-button type="warning" disabled>警告</ml-button>
<ml-button type="danger" disabled>危险</ml-button>
<ml-button type="info" disabled>提示</ml-button>
```

#### 图标按钮 <Badge text="icon" type="warning"/>

---

<template>
<ml-button icon="ml-icon-share">默认</ml-button>
<ml-button type="warning" icon="ml-icon-delete" round>圆角</ml-button>
<ml-button type="primary" icon="ml-icon-favorite"></ml-button>
<ml-button type="success" icon="ml-icon-module" round></ml-button>
</template>

```html
<ml-button icon="ml-icon-share">默认</ml-button>
<ml-button type="warning" icon="ml-icon-delete" round>圆角</ml-button>
<ml-button type="primary" icon="ml-icon-favorite"></ml-button>
<ml-button type="success" icon="ml-icon-module" round></ml-button>
```

#### 不同尺寸

---

<template>
<ml-button type="primary">默认</ml-button>
<ml-button type="primary" size="medium">中等</ml-button>
<ml-button type="primary" size="small">小型</ml-button>
<ml-button type="primary" size="mini">超小</ml-button>
</template>

```html
<ml-button type="primary">默认</ml-button>
<ml-button type="primary" size="medium">中等</ml-button>
<ml-button type="primary" size="small">小型</ml-button>
<ml-button type="primary" size="mini">超小</ml-button>
```

#### 加载中...

---

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleClick() {
      this.loading = true;
    }
  }
}
</script>

<template>
<ml-button type="primary" icon="ml-icon-icon_work_fill" :loading="loading" @click="handleClick">点我试试</ml-button>
<ml-button type="primary" loading>加载状态</ml-button>
</template>

```vue
<template>
  <ml-button
    type="primary"
    icon="ml-icon-icon_work_fill"
    :loading="loading"
    @click="handleClick"
    >点我试试</ml-button
  >
  <ml-button type="primary" loading>圆角</ml-button>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
    }
  }
};
</script>
```

#### 按钮组

---

<template>
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

```html
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
```

#### Attributes <Badge text="属性" type="warning"/>

---

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type        | 按钮类型       | string  | primary / success / warning / danger / info / text | -      |
| size        | 按钮尺寸       | string  | medium / small / mini                              | -      |
| plain       | 是否幽灵按钮   | boolean | -                                                  | false  |
| round       | 圆角按钮       | boolean | -                                                  | false  |
| loading     | 加载状态       | blooean | -                                                  | false  |
| disabled    | 禁用状态       | blooean | -                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
| icon        | 图标           | string  | -                                                  | -      |
| autofocus   | 是否默认聚焦   | boolean | -                                                  | false  |
