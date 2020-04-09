---
title: ColorPicker 颜色选择
---
<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
<div class="block">
  <span class="demonstration">有默认值</span>
  <ml-color-picker v-model="color1"></ml-color-picker>
</div>
<div class="block">
  <span class="demonstration">无默认值</span>
  <ml-color-picker v-model="color2"></ml-color-picker>
</div>