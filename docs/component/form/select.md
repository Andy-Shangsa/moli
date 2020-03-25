---
title: Select 下拉框
---

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                modules: [
                    {
                        key: "basic",
                        title: "基础用法",
                        desc: "适用广泛的基础单选",
                        source: ``
                    }
                ]
            }
        }
    }
</script>

<block title="Select 下拉框" desc="当选项过多时，使用下拉菜单展示并选择内容。" :modules="modules">
    <template slot="basic">
        <ml-select v-model="value" clearable placeholder="请选择">
            <ml-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </ml-option>
        </ml-select>
    </template>

</block>
