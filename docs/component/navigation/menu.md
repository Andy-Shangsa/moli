---
title: Menu 导航菜单
---

<script>
	export default {
		data() {
			return {
				isCollapse: true,
				 activeIndex: '1',
        activeIndex2: '1'
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			 handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
		}
	}
</script>

<template>
<ml-menu :default-active="activeIndex" class="ml-menu-demo" mode="horizontal" @select="handleSelect">
  <ml-menu-item index="1">处理中心</ml-menu-item>
  <ml-submenu index="2">
    <template slot="title">我的工作台</template>
    <ml-menu-item index="2-1">选项1</ml-menu-item>
    <ml-menu-item index="2-2">选项2</ml-menu-item>
    <ml-menu-item index="2-3">选项3</ml-menu-item>
    <ml-submenu index="2-4">
      <template slot="title">选项4</template>
      <ml-menu-item index="2-4-1">选项1</ml-menu-item>
      <ml-menu-item index="2-4-2">选项2</ml-menu-item>
      <ml-menu-item index="2-4-3">选项3</ml-menu-item>
    </ml-submenu>
  </ml-submenu>
  <ml-menu-item index="3" disabled>消息中心</ml-menu-item>
  <ml-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></ml-menu-item>
</ml-menu>
<div class="line"></div>
<ml-menu
  :default-active="activeIndex2"
  class="ml-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <ml-menu-item index="1">处理中心</ml-menu-item>
  <ml-submenu index="2">
    <template slot="title">我的工作台</template>
    <ml-menu-item index="2-1">选项1</ml-menu-item>
    <ml-menu-item index="2-2">选项2</ml-menu-item>
    <ml-menu-item index="2-3">选项3</ml-menu-item>
    <ml-submenu index="2-4">
      <template slot="title">选项4</template>
      <ml-menu-item index="2-4-1">选项1</ml-menu-item>
      <ml-menu-item index="2-4-2">选项2</ml-menu-item>
      <ml-menu-item index="2-4-3">选项3</ml-menu-item>
    </ml-submenu>
  </ml-submenu>
  <ml-menu-item index="3" disabled>消息中心</ml-menu-item>
  <ml-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></ml-menu-item>
</ml-menu>
<ml-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
	<ml-radio-button :label="false">展开</ml-radio-button>
	<ml-radio-button :label="true">收起</ml-radio-button>
</ml-radio-group>
<ml-menu default-active="1-4-1" class="ml-menu-vertical-demo" @open="handleOpen" @close="handleClose"
	:collapse="isCollapse">
	<ml-submenu index="1">
		<template slot="title">
			<i class="ml-icon-module"></i>
			<span slot="title">导航一</span>
		</template>
		<ml-menu-item-group>
			<span slot="title">分组一</span>
			<ml-menu-item index="1-1">选项1</ml-menu-item>
			<ml-menu-item index="1-2">选项2</ml-menu-item>
		</ml-menu-item-group>
		<ml-menu-item-group title="分组2">
			<ml-menu-item index="1-3">选项3</ml-menu-item>
		</ml-menu-item-group>
		<ml-submenu index="1-4">
			<span slot="title">选项4</span>
			<ml-menu-item index="1-4-1">选项1</ml-menu-item>
		</ml-submenu>
	</ml-submenu>
	<ml-menu-item index="2">
		<i class="ml-icon-all-fill"></i>
		<span slot="title">导航二</span>
	</ml-menu-item>
	<ml-menu-item index="3" disabled>
		<i class="ml-icon-message"></i>
		<span slot="title">导航三</span>
	</ml-menu-item>
	<ml-menu-item index="4">
		<i class="ml-icon-lightning"></i>
		<span slot="title">导航四</span>
	</ml-menu-item>
</ml-menu>
</template>

<style>
	.ml-menu-vertical-demo:not(.ml-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
