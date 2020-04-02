---
title: Backtop 返回顶部
---

<template>
  Scroll down to see the bottom-right button.
  <div style="height: 2000px"></div>
  <ml-backtop ></ml-backtop>
</template>

<template>
  Scroll down to see the bottom-right button.
  <ml-backtop :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </ml-backtop>
</template>
