---
title: Popup 抽屉
---

<script>
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false
      };
    },
    methods: {
      handleClose(done) {
          done()
      }
    }
  };
</script>
<ml-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</ml-button>
<ml-popup
  title="我是外面的 Drawer"
  :visible.sync="drawer"
  size="50%">
  <div>
   <ml-button @click="innerDrawer = true">打开里面的!</ml-button>
   <ml-popup
     title="我是里面的"
     :append-to-body="true"
     :visible.sync="innerDrawer">
     <p>_(:зゝ∠)_</p>
   </ml-popup>
  </div>
</ml-popup>