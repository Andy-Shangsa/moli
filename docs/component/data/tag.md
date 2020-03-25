---
title: Tag 标签
---

<script>
	export default {
		data() {
			return {
				items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
				],
				removeList: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ],
				modules: [
					{
						key: "basic",
						title: "基础用法",
						source: `<ml-tag>标签一</ml-tag>
		<ml-tag type="success">标签二</ml-tag>
		<ml-tag type="info">标签三</ml-tag>
		<ml-tag type="warning">标签四</ml-tag>
		<ml-tag type="danger">标签五</ml-tag>`
					},
					{
						key: "removable",
						title: "可移除标签",
						source: `data: {
							removeList: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
						}

						<ml-tag 
						v-for="(item, index) in removeList" 
						:key="item.label" 
						:type="item.type" 
						removable 
						@close="handleClose(index)">	
						{{ item.label }}
						</ml-tag>`
					},
					{
						key: "size",
						title: "不同尺寸",
						source: `	<ml-tag removable>默认标签</ml-tag>
		<ml-tag size="medium" removable>中等标签</ml-tag>
		<ml-tag size="small" removable>小型标签</ml-tag>
		<ml-tag size="mini" removable>超小标签</ml-tag>`
					},
					{
						key: "theme",
						title: "不同主题",
						source: `data: {
							items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
				]
						}
						<div class="tag-group">
			<span class="tag-group__title">Dark</span>
			<ml-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
				{{ item.label }}
			</ml-tag>
		</div>
		<div class="tag-group">
			<span class="tag-group__title">Plain</span>
			<ml-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
				{{ item.label }}
			</ml-tag>
		</div>`
					}
				]
			};
		},
		methods: {
			handleClose(index) {
				this.removeList.splice(index, 1);
			}
		}
	};
</script>

<block title="Tag 标签" desc="用于标记和选择。" :modules="modules">
	<template slot="basic">
		<ml-tag>标签一</ml-tag>
		<ml-tag type="success">标签二</ml-tag>
		<ml-tag type="info">标签三</ml-tag>
		<ml-tag type="warning">标签四</ml-tag>
		<ml-tag type="danger">标签五</ml-tag>
	</template>
	<template slot="removable">
		<ml-tag v-for="(item, index) in removeList" :key="item.label" :type="item.type" removable @close="handleClose(index)">	{{ item.label }}</ml-tag>
	</template>
	<template slot="size">
		<ml-tag removable>默认标签</ml-tag>
		<ml-tag size="medium" removable>中等标签</ml-tag>
		<ml-tag size="small" removable>小型标签</ml-tag>
		<ml-tag size="mini" removable>超小标签</ml-tag>
	</template>
	<template slot="theme">
		<div class="tag-group">
			<span class="tag-group__title">Dark</span>
			<ml-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
				{{ item.label }}
			</ml-tag>
		</div>
		<div class="tag-group">
			<span class="tag-group__title">Plain</span>
			<ml-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
				{{ item.label }}
			</ml-tag>
		</div>
	</template>
</block>

<style lang="scss">
	.ml-tag {
		margin: 5px 10px;
	}
	.tag-group__title{
		width: 45px;
    font-size: 14px;
    color: #606266;
	}
</style>

### 属性

| 参数 | 说明 | 类型   | 可选值                      | 默认值 |
| ---- | ---- | ------ | --------------------------- | ------ |
| type | 类型 | string | success/info/warning/danger | -      |
