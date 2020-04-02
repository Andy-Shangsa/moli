---
title: Breadcrumb 面包屑
---

<ml-breadcrumb separator="/">
  <ml-breadcrumb-item :to="{ path: '/' }">首页</ml-breadcrumb-item>
  <ml-breadcrumb-item><a href="/">活动管理</a></ml-breadcrumb-item>
  <ml-breadcrumb-item>活动列表</ml-breadcrumb-item>
  <ml-breadcrumb-item>活动详情</ml-breadcrumb-item>
</ml-breadcrumb>

<ml-breadcrumb separator-class="ml-icon-arrow-right">
  <ml-breadcrumb-item :to="{ path: '/' }">首页</ml-breadcrumb-item>
  <ml-breadcrumb-item>活动管理</ml-breadcrumb-item>
  <ml-breadcrumb-item>活动列表</ml-breadcrumb-item>
  <ml-breadcrumb-item>活动详情</ml-breadcrumb-item>
</ml-breadcrumb>

<style>
.ml-breadcrumb {
    margin: 15px 0;
}
</style>