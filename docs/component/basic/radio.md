---
title: Radio
---

### 单选按钮

#### 基础用法 <Badge text="若选项过多，建议使用 Select 选择器。" type="warning"/>

---

<script>
export default {
    data() {
        return {
            model: "1",
            value: "1",
            group: "1",
            border:"1",
            button: "上海"
        }
    }
}
</script>

<template>
<ml-radio v-model="model" label="1">选项一</ml-radio>
<ml-radio v-model="model" label="2">选项二</ml-radio>
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
  <ml-radio v-model="model" label="1">选项一</ml-radio>
  <ml-radio v-model="model" label="2">选项二</ml-radio>
</template>
```

#### 禁用状态 <Badge text="设置disabled属性" type="warning"/>

---

<template>
  <ml-radio v-model="value" label="1" disabled>选项一</ml-radio>
  <ml-radio v-model="value" label="2">选项二</ml-radio>
  <ml-radio v-model="value" label="3" disabled>选项三</ml-radio>
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
  <ml-radio v-model="model" label="1" disabled>选项一</ml-radio>
  <ml-radio v-model="model" label="2">选项二</ml-radio>
  <ml-radio v-model="model" label="3" disabled>选项三</ml-radio>
</template>
```

#### 单选框组

---

<template>
<ml-radio-group v-model="group">
    <ml-radio label="1">选项一</ml-radio>
    <ml-radio label="2">选项二</ml-radio>
    <ml-radio label="3">选项三</ml-radio>
</ml-radio-group>
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
  <ml-radio-group v-model="model">
    <ml-radio label="1">选项一</ml-radio>
    <ml-radio label="2">选项二</ml-radio>
    <ml-radio label="3">选项三</ml-radio>
  </ml-radio-group>
</template>
```

#### 按钮类型

---

<template>
  <ml-radio-group v-model="button">
    <ml-radio-button label="上海"></ml-radio-button>
    <ml-radio-button label="北京"></ml-radio-button>
    <ml-radio-button label="广州"></ml-radio-button>
    <ml-radio-button label="深圳"></ml-radio-button>
  </ml-radio-group>
</template>

```vue
<script>
export default {
  data() {
    return {
      model: "上海"
    };
  }
};
</script>
<template>
  <ml-radio-group v-model="model">
    <ml-radio-button label="上海"></ml-radio-button>
    <ml-radio-button label="北京"></ml-radio-button>
    <ml-radio-button label="广州"></ml-radio-button>
    <ml-radio-button label="深圳"></ml-radio-button>
  </ml-radio-group>
</template>
```

#### 带边框 <Badge text="设置border属性" type="warning"/>

---

<template>
<ml-radio v-model="border" label="1" border>备选项1</ml-radio>
<ml-radio v-model="border" label="2" border>备选项2</ml-radio>
<ml-radio v-model="border" label="3" border>备选项3</ml-radio>
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
  <ml-radio v-model="model" label="1" border>备选项1</ml-radio>
  <ml-radio v-model="border" label="2" border>备选项2</ml-radio>
  <ml-radio v-model="border" label="3" border>备选项3</ml-radio>
</template>
```
