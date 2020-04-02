---
title: Steps 步骤
---

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<ml-steps :active="active" finish-status="success">
  <ml-step title="步骤 1"></ml-step>
  <ml-step title="步骤 2"></ml-step>
  <ml-step title="步骤 3"></ml-step>
</ml-steps>

<ml-button style="margin-top: 12px;" @click="next">下一步</ml-button>

<ml-steps :active="1">
  <ml-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></ml-step>
  <ml-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></ml-step>
  <ml-step title="步骤 3" description="这段就没那么长了"></ml-step>
</ml-steps>

<ml-steps :active="2" align-center>
  <ml-step title="步骤1" description="这是一段很长很长很长的描述性文字"></ml-step>
  <ml-step title="步骤2" description="这是一段很长很长很长的描述性文字"></ml-step>
  <ml-step title="步骤3" description="这是一段很长很长很长的描述性文字"></ml-step>
  <ml-step title="步骤4" description="这是一段很长很长很长的描述性文字"></ml-step>
</ml-steps>

<div style="height: 300px;">
  <ml-steps direction="vertical" :active="1">
    <ml-step title="步骤 1"></ml-step>
    <ml-step title="步骤 2"></ml-step>
    <ml-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></ml-step>
  </ml-steps>
</div>

<ml-steps :active="1" simple>
  <ml-step title="步骤 1" icon="ml-icon-edit"></ml-step>
  <ml-step title="步骤 2" icon="ml-icon-upload"></ml-step>
  <ml-step title="步骤 3" icon="ml-icon-picture"></ml-step>
</ml-steps>

<ml-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <ml-step title="步骤 1"></ml-step>
  <ml-step title="步骤 2"></ml-step>
  <ml-step title="步骤 3"></ml-step>
</ml-steps>

<style>
  .ml-steps {
    margin: 20px 0;
  }
</style>