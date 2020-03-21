---
title: Input
---

### 输入框

<script>
export default {
    data() {
        return {
            model: ""
        }
    }
}
</script>
<template>
    <ml-input v-model="model" clearable />
</template>
