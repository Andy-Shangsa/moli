---
title: InputNumber
---

#### InputNumber

<script>
  export default {
    data() {
      return {
        num: 1,
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<template>
  <ml-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></ml-input-number>
  <ml-input-number size="medium" v-model="num2"></ml-input-number>
  <ml-input-number size="small" v-model="num3"></ml-input-number>
  <ml-input-number size="mini" v-model="num4"></ml-input-number>
  <ml-input-number v-model="num" controls-position="right"></ml-input-number>
  <ml-input-number v-model="num2" size="medium" controls-position="right"></ml-input-number>
  <ml-input-number v-model="num3" size="small" controls-position="right"></ml-input-number>
  <ml-input-number v-model="num4" size="mini" controls-position="right"></ml-input-number>
</template>

<style lang="scss">
  .ml-input-number {
    margin: 5px;
  }
</style>