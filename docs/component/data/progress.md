---
title: Progress 进度条
---

<script>
  export default {
       data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
       increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  };
</script>

<ml-progress :percentage="50"></ml-progress>
<ml-progress :percentage="100" :format="format"></ml-progress>
<ml-progress :percentage="100" status="success"></ml-progress>
<ml-progress :percentage="100" status="warning"></ml-progress>
<ml-progress :percentage="50" status="exception"></ml-progress>

<ml-progress :text-inside="true" :stroke-width="26" :percentage="70"></ml-progress>
<ml-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></ml-progress>
<ml-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></ml-progress>
<ml-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></ml-progress>

<ml-progress type="circle" :percentage="0"></ml-progress>
<ml-progress type="circle" :percentage="25"></ml-progress>
<ml-progress type="circle" :percentage="100" status="success"></ml-progress>
<ml-progress type="circle" :percentage="70" status="warning"></ml-progress>
<ml-progress type="circle" :percentage="50" status="exception"></ml-progress>

<ml-progress type="dashboard" :percentage="percentage" :color="colors"></ml-progress>

<div>
  <ml-button-group>
    <ml-button icon="ml-icon-minus" @click="decrease"></ml-button>
    <ml-button icon="ml-icon-plus" @click="increase"></ml-button>
  </ml-button-group>
</div>

<style>
.ml-progress {
    margin: 5px 0;
}
</style>
