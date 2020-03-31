---
title: Badge 标记
---

### Badge

<ml-badge :value="12" class="item">
  <ml-button size="small">评论</ml-button>
</ml-badge>
<ml-badge :value="3" class="item">
  <ml-button size="small">回复</ml-button>
</ml-badge>
<ml-badge value="new" class="item">
  <ml-button size="small">评论</ml-button>
</ml-badge>
<ml-badge :value="200" :max="99" class="item">
  <ml-button size="small">评论</ml-button>
</ml-badge>
<ml-badge is-dot class="item">数据查询</ml-badge>

<style lang="scss">
    .ml-badge {
        margin-right: 40px;
    }
    </style>