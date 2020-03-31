---
title: Slider
---

<script>
    export default {
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 48,
                value5: 42,
                value6: [4, 8],
                value7: 0,
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        }
    }
</script>

<template>
    <div class="block">
        <span class="demonstration">默认</span>
        <ml-slider v-model="value1"></ml-slider>
    </div>
    <div class="block">
        <span class="demonstration">自定义初始值</span>
        <ml-slider v-model="value2"></ml-slider>
    </div>
    <div class="block">
        <span class="demonstration">隐藏 Tooltip</span>
        <ml-slider v-model="value3" :show-tooltip="false"></ml-slider>
    </div>
    <div class="block">
        <span class="demonstration">格式化 Tooltip</span>
        <ml-slider v-model="value4" :format-tooltip="formatTooltip"></ml-slider>
    </div>
    <div class="block">
        <span class="demonstration">禁用</span>
        <ml-slider v-model="value5" disabled></ml-slider>
    </div>
    <div class="block">
        <ml-slider
          v-model="value7"
          show-input>
        </ml-slider>
      </div>
      <div class="block">
        <ml-slider
          v-model="value6"
          range
          show-stops
          :max="10">
        </ml-slider>
      </div>
</template>