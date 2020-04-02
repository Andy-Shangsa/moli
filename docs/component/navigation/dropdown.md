---
title: Dropdown 下拉菜单
---

### Dropdown 下拉菜单

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
<ml-dropdown>
  <span class="ml-dropdown-link">
    下拉菜单<i class="ml-icon-arrow-down ml-icon--right"></i>
  </span>
  <ml-dropdown-menu slot="dropdown">
    <ml-dropdown-item>黄金糕</ml-dropdown-item>
    <ml-dropdown-item>狮子头</ml-dropdown-item>
    <ml-dropdown-item>螺蛳粉</ml-dropdown-item>
    <ml-dropdown-item disabled>双皮奶</ml-dropdown-item>
    <ml-dropdown-item divided>蚵仔煎</ml-dropdown-item>
  </ml-dropdown-menu>
</ml-dropdown>
<ml-dropdown>
  <ml-button type="primary">
    更多菜单<i class="ml-icon-arrow-down ml-icon--right"></i>
  </ml-button>
  <ml-dropdown-menu slot="dropdown">
    <ml-dropdown-item>黄金糕</ml-dropdown-item>
    <ml-dropdown-item>狮子头</ml-dropdown-item>
    <ml-dropdown-item>螺蛳粉</ml-dropdown-item>
    <ml-dropdown-item>双皮奶</ml-dropdown-item>
    <ml-dropdown-item>蚵仔煎</ml-dropdown-item>
  </ml-dropdown-menu>
</ml-dropdown>
<ml-dropdown split-button type="primary" @click="handleClick">
  更多菜单
  <ml-dropdown-menu slot="dropdown">
    <ml-dropdown-item>黄金糕</ml-dropdown-item>
    <ml-dropdown-item>狮子头</ml-dropdown-item>
    <ml-dropdown-item>螺蛳粉</ml-dropdown-item>
    <ml-dropdown-item>双皮奶</ml-dropdown-item>
    <ml-dropdown-item>蚵仔煎</ml-dropdown-item>
  </ml-dropdown-menu>
</ml-dropdown>

<style>
  .ml-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .ml-icon-arrow-down {
    font-size: 12px;
  }

   .ml-dropdown {
    vertical-align: top;
  }
  .ml-dropdown + .ml-dropdown {
    margin-left: 15px;
  }
  .ml-icon-arrow-down {
    font-size: 12px;
  }
</style>
