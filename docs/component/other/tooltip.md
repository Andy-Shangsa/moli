---
title: Tooltip 提示
---

<script>
    export default {
        data() {
            return {
                modules: [
                    {
                        key: "basic",
                        title: "基础用法",
                        source: ``
                    }
                ]
            };
        },
        methods: {}
    };
</script>

<block title="Tooltip 提示" desc="常用于展示鼠标 hover 时的提示信息。" :modules="modules">
    <template slot="basic">
        <div class="box">
            <div class="top">
                <ml-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <ml-button>上左</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                    <ml-button>上边</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                    <ml-button>上右</ml-button>
                </ml-tooltip>
            </div>
            <div class="left">
                <ml-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                    <ml-button>左上</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                    <ml-button>左边</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                    <ml-button>左下</ml-button>
                </ml-tooltip>
            </div>
            <div class="right">
                <ml-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                    <ml-button>右上</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                    <ml-button>右边</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                    <ml-button>右下</ml-button>
                </ml-tooltip>
            </div>
            <div class="bottom">
                <ml-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                    <ml-button>下左</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <ml-button>下边</ml-button>
                </ml-tooltip>
                <ml-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                    <ml-button>下右</ml-button>
                </ml-tooltip>
            </div>
        </div>
    </template>
</block>

<style lang="scss">
 .box {
    width: 400px;
 }
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

</style>

### 属性

| 参数 | 说明 | 类型   | 可选值                      | 默认值 |
| ---- | ---- | ------ | --------------------------- | ------ |
| type | 类型 | string | success/info/warning/danger | -      |
