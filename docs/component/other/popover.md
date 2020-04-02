---
title: Popover 弹出框
---

### Popover 弹出框

<script>
  export default {
    data() {
      return {
        visible: false,
         visible2: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    }
  };
</script>
<template>
  <ml-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <ml-button slot="reference">hover 激活</ml-button>
  </ml-popover>
  <ml-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <ml-button slot="reference">click 激活</ml-button>
  </ml-popover>
  <ml-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  </ml-popover>
  <ml-button v-popover:popover>focus 激活</ml-button>
  <ml-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible">
    <ml-button slot="reference" @click="visible = !visible">手动激活</ml-button>
  </ml-popover>
  <ml-popover
  placement="right"
  width="400"
  trigger="click">
  <ml-table :data="gridData">
    <ml-table-column width="150" property="date" label="日期"></ml-table-column>
    <ml-table-column width="100" property="name" label="姓名"></ml-table-column>
    <ml-table-column width="300" property="address" label="地址"></ml-table-column>
  </ml-table>
  <ml-button slot="reference">click 激活</ml-button>
</ml-popover>
<ml-popover
  placement="top"
  width="160"
  v-model="visible2">
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <ml-button size="mini" type="text" @click="visible = false">取消</ml-button>
    <ml-button type="primary" size="mini" @click="visible = false">确定</ml-button>
  </div>
  <ml-button slot="reference">删除</ml-button>
</ml-popover>
</template>