---
title: Radio
---

### 单选按钮

#### 基础用法 <Badge text="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。" type="warning"/>

---

<script>
export default {
    data() {
        return {
            model: "1",
            value: "1",
            group: "1",
            border:"1"
        }
    }
}
</script>

<template>
<m-radio v-model="model" label="1">选项一</m-radio>
<m-radio v-model="model" label="2">选项二</m-radio>
</template>

```vue
<script>
export default {
  data() {
    return {
      model: "1"
    };
  }
};
</script>
<template>
  <m-radio v-model="model" label="1">选项一</m-radio>
  <m-radio v-model="model" label="2">选项二</m-radio>
</template>
```

#### 禁用状态 <Badge text="设置disabled属性" type="warning"/>

---

<template>
  <m-radio v-model="value" label="1" disabled>选项一</m-radio>
  <m-radio v-model="value" label="2">选项二</m-radio>
  <m-radio v-model="value" label="3" disabled>选项三</m-radio>
</template>

```vue
<script>
export default {
  data() {
    return {
      model: "1"
    };
  }
};
</script>

<template>
  <m-radio v-model="model" label="1" disabled>选项一</m-radio>
  <m-radio v-model="model" label="2">选项二</m-radio>
  <m-radio v-model="model" label="3" disabled>选项三</m-radio>
</template>
```

#### 单选框组

---

<template>
<m-radio-group v-model="group">
    <m-radio label="1">选项一</m-radio>
    <m-radio label="2">选项二</m-radio>
    <m-radio label="3">选项三</m-radio>
</m-radio-group>
</template>

```vue
<script>
export default {
  data() {
    return {
      model: "1"
    };
  }
};
</script>
<template>
  <m-radio-group v-model="model">
    <m-radio label="1">选项一</m-radio>
    <m-radio label="2">选项二</m-radio>
    <m-radio label="3">选项三</m-radio>
  </m-radio-group>
</template>
```

#### 带边框 <Badge text="设置border属性" type="warning"/>

---

<template>
<m-radio v-model="border" label="1" border>备选项1</m-radio>
<m-radio v-model="border" label="2" border>备选项2</m-radio>
<m-radio v-model="border" label="3" border>备选项3</m-radio>
</template>

```vue
<script>
export default {
  data() {
    return {
      model: "1"
    };
  }
};
</script>
<template>
  <m-radio v-model="model" label="1" border>备选项1</m-radio>
  <m-radio v-model="border" label="2" border>备选项2</m-radio>
  <m-radio v-model="border" label="3" border>备选项3</m-radio>
</template>
```
