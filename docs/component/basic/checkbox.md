---
title: Checkbox
---

### 多选按钮

#### 基本用法

---

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      checked: true,
      checked2: false,
      checkList: [],
      checkList2: [],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
       checkedCities2: ['上海', '北京'],
    }
  },
   methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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

#### 复选按钮组

---

<template>
  <ml-checkbox-group v-model="checkList">
    <ml-checkbox label="复选框 A"></ml-checkbox>
    <ml-checkbox label="复选框 B"></ml-checkbox>
    <ml-checkbox label="复选框 C"></ml-checkbox>
  </ml-checkbox-group>
</template>

```vue
<script>
export default {
  data() {
    return {
      checkList: []
    };
  }
};
</script>
<template>
  <ml-checkbox-group v-model="checkList">
    <ml-checkbox label="复选框 A"></ml-checkbox>
    <ml-checkbox label="复选框 B"></ml-checkbox>
    <ml-checkbox label="复选框 C"></ml-checkbox>
  </ml-checkbox-group>
</template>
```

#### indeterminate 状态 <Badge text="indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果" type="warning"/>

---

<template>
  <ml-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</ml-checkbox>
  <div style="margin: 15px 0;"></div>
  <ml-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <ml-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</ml-checkbox>
  </ml-checkbox-group>
</template>

```vue
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<template>
  <ml-checkbox
    :indeterminate="isIndeterminate"
    v-model="checkAll"
    @change="handleCheckAllChange"
    >全选</ml-checkbox
  >
  <div style="margin: 15px 0;"></div>
  <ml-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <ml-checkbox v-for="city in cities" :label="city" :key="city">{{
      city
    }}</ml-checkbox>
  </ml-checkbox-group>
</template>
```

#### 限制数量 <Badge text="使用 min 和 max 属性能够限制可以被勾选的项目的数量。" type="warning"/>

---

<template>
  <ml-checkbox-group
    v-model="checkedCities2"
    :min="1"
    :max="2">
    <ml-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</ml-checkbox>
  </ml-checkbox-group>
</template>

```vue
<template>
  <ml-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <ml-checkbox v-for="city in cities" :label="city" :key="city">{{
      city
    }}</ml-checkbox>
  </ml-checkbox-group>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkedCities: ["上海", "北京"],
      cities: cityOptions
    };
  }
};
</script>
```

#### 按钮样式

---

<template>
  <ml-checkbox-group v-model="checkList2">
    <ml-checkbox-button label="复选框 A" border></ml-checkbox-button>
    <ml-checkbox-button label="复选框 B" border></ml-checkbox-button>
    <ml-checkbox-button label="复选框 C" border></ml-checkbox-button>
  </ml-checkbox-group>
</template>

```vue
<script>
export default {
  data() {
    return {
      checkList: []
    };
  }
};
</script>
<template>
  <ml-checkbox-group v-model="checkList">
    <ml-checkbox label="复选框 A" border></ml-checkbox>
    <ml-checkbox label="复选框 B" border></ml-checkbox>
    <ml-checkbox label="复选框 C" border></ml-checkbox>
  </ml-checkbox-group>
</template>
```

#### 边框样式

---

<template>
  <ml-checkbox-group v-model="checkList2">
    <ml-checkbox label="复选框 A" border></ml-checkbox>
    <ml-checkbox label="复选框 B" border></ml-checkbox>
    <ml-checkbox label="复选框 C" border></ml-checkbox>
  </ml-checkbox-group>
</template>

```vue
<script>
export default {
  data() {
    return {
      checkList: []
    };
  }
};
</script>
<template>
  <ml-checkbox-group v-model="checkList">
    <ml-checkbox label="复选框 A" border></ml-checkbox>
    <ml-checkbox label="复选框 B" border></ml-checkbox>
    <ml-checkbox label="复选框 C" border></ml-checkbox>
  </ml-checkbox-group>
</template>
```
