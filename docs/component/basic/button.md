---
title: Button
---
### 按钮

#### 基础用法 <Badge text="type" type="warning"/>

---

<template>
<m-button>默认</m-button>
<m-button type="primary">主要</m-button>
<m-button type="success">成功</m-button>
<m-button type="warning">警告</m-button>
<m-button type="danger">危险</m-button>
<m-button type="info">提示</m-button>
<m-button type="text">文字</m-button>
</template>

```html
<m-button>默认</m-button>
<m-button type="primary">主要</m-button>
<m-button type="success">成功</m-button>
<m-button type="warning">警告</m-button>
<m-button type="danger">危险</m-button>
<m-button type="info">提示</m-button>
<m-button type="text">文字</m-button>
```

#### 幽灵按钮 <Badge text="plain" type="warning"/>

---

<template>
<m-button plain>默认</m-button>
<m-button type="primary" plain>主要</m-button>
<m-button type="success" plain>成功</m-button>
<m-button type="warning" plain>警告</m-button>
<m-button type="danger" plain>危险</m-button>
<m-button type="info" plain>提示</m-button>
</template>

```html
<m-button plain>默认</m-button>
<m-button type="primary" plain>主要</m-button>
<m-button type="success" plain>成功</m-button>
<m-button type="warning" plain>警告</m-button>
<m-button type="danger" plain>危险</m-button>
<m-button type="info" plain>提示</m-button>
```

#### 圆角按钮 <Badge text="round" type="warning"/>

---

<template>
<m-button round>默认</m-button>
<m-button type="primary" round>主要</m-button>
<m-button type="success" round>成功</m-button>
<m-button type="warning" round>警告</m-button>
<m-button type="danger" round>危险</m-button>
<m-button type="info" round>提示</m-button>
</template>

```html
<m-button round>默认</m-button>
<m-button type="primary" round>主要</m-button>
<m-button type="success" round>成功</m-button>
<m-button type="warning" round>警告</m-button>
<m-button type="danger" round>危险</m-button>
<m-button type="info" round>提示</m-button>
```

#### 禁用按钮 <Badge text="disabled" type="warning"/>

---

<template>
<m-button disabled>默认</m-button>
<m-button type="primary" disabled>主要</m-button>
<m-button type="success" disabled>成功</m-button>
<m-button type="warning" disabled>警告</m-button>
<m-button type="danger" disabled>危险</m-button>
<m-button type="info" disabled>提示</m-button>
</template>

```html
<m-button disabled>默认</m-button>
<m-button type="primary" disabled>主要</m-button>
<m-button type="success" disabled>成功</m-button>
<m-button type="warning" disabled>警告</m-button>
<m-button type="danger" disabled>危险</m-button>
<m-button type="info" disabled>提示</m-button>
```

#### 图标按钮 <Badge text="icon" type="warning"/>

---

<template>
<m-button icon="ml-icon-share">默认</m-button>
<m-button type="warning" icon="ml-icon-delete" round>圆角</m-button>
<m-button type="primary" icon="ml-icon-favorite"></m-button>
<m-button type="success" icon="ml-icon-module" round></m-button>
</template>

```html
<m-button icon="ml-icon-share">默认</m-button>
<m-button type="warning" icon="ml-icon-delete" round>圆角</m-button>
<m-button type="primary" icon="ml-icon-favorite"></m-button>
<m-button type="success" icon="ml-icon-module" round></m-button>
```

#### 不同尺寸

---

<template>
<m-button type="primary">默认</m-button>
<m-button type="primary" size="medium">中等</m-button>
<m-button type="primary" size="small">小型</m-button>
<m-button type="primary" size="mini">超小</m-button>
</template>

```html
<m-button type="primary">默认</m-button>
<m-button type="primary" size="medium">中等</m-button>
<m-button type="primary" size="small">小型</m-button>
<m-button type="primary" size="mini">超小</m-button>
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
<m-button type="primary" icon="ml-icon-icon_work_fill" :loading="loading" @click="handleClick">点我试试</m-button>
<m-button type="primary" loading>加载状态</m-button>
</template>

```vue
<template>
  <m-button
    type="primary"
    icon="ml-icon-icon_work_fill"
    :loading="loading"
    @click="handleClick"
    >点我试试</m-button
  >
  <m-button type="primary" loading>圆角</m-button>
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
<m-button-group>
  <m-button type="primary" icon="ml-icon-arrow-left">上一页</m-button>
  <m-button type="primary">
  <span>下一页</span>
  <i class="ml-icon-arrow-right"></i>
  </m-button>
</m-button-group>
<m-button-group>
<m-button type="primary" icon="ml-icon-share"></m-button>
<m-button type="primary" icon="ml-icon-delete"></m-button>
<m-button type="primary" icon="ml-icon-favorite"></m-button>
</m-button-group>
</template>

```html
<m-button-group>
  <m-button type="primary" icon="ml-icon-arrow-left">上一页</m-button>
  <m-button type="primary">
    <span>下一页</span>
    <i class="ml-icon-arrow-right"></i>
  </m-button>
</m-button-group>
<m-button-group>
  <m-button type="primary" icon="ml-icon-share"></m-button>
  <m-button type="primary" icon="ml-icon-delete"></m-button>
  <m-button type="primary" icon="ml-icon-favorite"></m-button>
</m-button-group>
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
