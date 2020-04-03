---
title: Swiper 轮播图
---

### Swiper 轮播图

<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <ml-swiper height="150px">
      <ml-swiper-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </ml-swiper-item>
    </ml-swiper>
  </div>
  <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <ml-swiper trigger="click" height="150px">
      <ml-swiper-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </ml-swiper-item>
    </ml-swiper>
  </div>
    <ml-swiper :interval="4000" type="card" height="200px">
    <ml-swiper-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </ml-swiper-item>
  </ml-swiper>
</template>

<style>
  .ml-swiper__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .ml-swiper__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .ml-swiper__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .ml-swiper__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .ml-swiper__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .ml-swiper__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
