---
title: TimePicker 时间选择器
---
<script>
    export default {
        data() {
            return {
                value: '',
                value1: new Date(2016, 9, 10, 18, 40),
                value2: new Date(2016, 9, 10, 18, 40),
                value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
            };
        }
    }
</script>
<template>
    <ml-time-select v-model="value" :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }" placeholder="选择时间">
    </ml-time-select>
    <ml-time-picker v-model="value1" :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }" placeholder="任意时间点">
    </ml-time-picker>
    <ml-time-picker arrow-control v-model="value2" :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }" placeholder="任意时间点">
    </ml-time-picker>
    <ml-time-picker is-range v-model="value3" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"
        placeholder="选择时间范围">
    </ml-time-picker>
    <ml-time-picker is-range arrow-control v-model="value4" range-separator="至" start-placeholder="开始时间"
        end-placeholder="结束时间" placeholder="选择时间范围">
    </ml-time-picker>
</template>