---
title: Dialog 弹框
---
### Dialog 弹框
<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				outerVisible: false,
				innerVisible: false
			};
		},
		methods: {
			handleClose(done) {
				done();
			}
		}
	};
</script>
<template>
	<ml-button type="text" @click="dialogVisible = true">点击打开 Dialog</ml-button>
	<ml-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" fullscreen>
		<div>这是一段信息</div>
		<span slot="footer" class="dialog-footer">
			<ml-button @click="dialogVisible = false">取 消</ml-button>
			<ml-button type="primary" @click="dialogVisible = false">确 定</ml-button>
		</span>
	</ml-dialog>
	<ml-button type="text" @click="outerVisible = true">点击打开外层 Dialog</ml-button>
	<ml-dialog title="外层 Dialog" :visible.sync="outerVisible">
		<ml-dialog width="50%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
			<div style="height: 1000px;">这是一段信息</div>
		</ml-dialog>
		<div slot="footer" class="dialog-footer">
			<ml-button @click="outerVisible = false">取 消</ml-button>
			<ml-button type="primary" @click="innerVisible = true">打开内层 Dialog</ml-button>
		</div>
	</ml-dialog>
</template>