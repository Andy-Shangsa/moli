---
title: Popconfirm 气泡确认框
---

### Popconfirm 气泡确认框
<template>
    <ml-popconfirm title="这是一段内容确定删除吗？">
        <ml-button slot="reference">删除</ml-button>
    </ml-popconfirm>
    <ml-popconfirm confirmButtonText='好的' cancelButtonText='不用了' icon="ml-icon-info" iconColor="red"
        title="这是一段内容确定删除吗？">
        <ml-button slot="reference">删除</ml-button>
    </ml-popconfirm>
</template>