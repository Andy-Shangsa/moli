---
title: Alert 警告
---

<ml-alert title="可关闭的alert" show-icon>我是辅助描述文字</ml-alert>
<ml-alert title="可关闭的alert" type="success" show-icon>我是辅助描述文字</ml-alert>
<ml-alert title="可关闭的alert" type="warning" show-icon>我是辅助描述文字</ml-alert>
<ml-alert title="可关闭的alert" type="error" show-icon>我是辅助描述文字</ml-alert>

<style lang="scss">
.ml-alert {
    & + & {
        margin-top: 10px;
    }
}
</style>