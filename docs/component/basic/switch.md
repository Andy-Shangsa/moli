---
title: Switch
---

### 开关

#### 基本用法

---

<script>
export default {
    data() {
        return {
            value: false,
            value2: false,
            model: false,
            model2: false,
            model3: false
        }
    }
}
</script>

<style>
.ml-switch {
    margin: 20px 20px 20px 0;
}
</style>
<template>
    <ml-switch v-model="value"></ml-switch>
    <ml-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
  inactive-text="按年付费"
    ></ml-switch>
</template>

```vue
<script>
export default {
  data() {
    return {
      value: false,
      value2: false
    };
  }
};
</script>
<template>
  <ml-switch v-model="value"></ml-switch>
  <ml-switch
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费"
  ></ml-switch>
</template>
```

#### 禁用状态

---

<template>
    <ml-switch v-model="model" disabled></ml-switch>
    <ml-switch
        v-model="model2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        disabled
    ></ml-switch>
    <ml-switch
        v-model="model3"
        active-value="100"
        inactive-value="0"
        disabled
    ></ml-switch>
</template>

```vue
<script>
export default {
  data() {
    return {
      value: false,
      value2: false,
      value3: false
    };
  }
};
</script>

<template>
  <ml-switch v-model="value" disabled></ml-switch>
  <ml-switch
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    disabled
  ></ml-switch>
  <ml-switch
    v-model="value3"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0"
    disabled
  ></ml-switch>
</template>
```
