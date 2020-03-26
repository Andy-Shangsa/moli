---
title: Message 消息提示
---

# 消息提示

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      open() {
        this.$message({ message: '这是一条消息提示', duration: 0, showClose: true, });
      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },

      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>

<template>
  <ml-button :plain="true" @click="open">打开消息提示</ml-button>
  <ml-button :plain="true" @click="open2">成功</ml-button>
  <ml-button :plain="true" @click="open3">警告</ml-button>
  <ml-button :plain="true" @click="open1">消息</ml-button>
  <ml-button :plain="true" @click="open4">错误</ml-button>
  <ml-button :plain="true" @click="openHTML">使用 HTML 片段</ml-button>
</template>
