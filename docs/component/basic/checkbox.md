---
title: Checkbox
---

### 多选按钮

#### 基本用法

---

<script>
export default {
  data() {
    return {
      checked: true,
      checked2: false
    }
  }
}
</script>
<template>
  <ml-checkbox v-model="checked">备选项1</ml-checkbox>
</template>

```vue
<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
<template>
  <ml-checkbox v-model="checked">备选项1</ml-checkbox>
</template>
```

#### 禁用 <Badge text="设置disabled属性" type="warning"/>

---

<template>
  <ml-checkbox v-model="checked2" disabled>备选项1</ml-checkbox>
</template>

```vue
<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
<template>
  <ml-checkbox v-model="checked" disabled>备选项1</ml-checkbox>
</template>
```
