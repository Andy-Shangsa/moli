---
title: Input 输入框
---

<script>
    export default {
        data() {
            return {
                model: "",
                model2: "",
                model3: "",
                pwd: "",
                textarea: "",
                textarea1: "",
                textarea2: "",
                modules: [
                    {
                        key: "basic",
                        title: "基础用法",
                        source:
                            `<ml-input v-model="model" placeholder="请输入内容"></ml-input>`
                    },
                    {
                        key: "disabled",
                        title: "禁用状态",
                        tips: "通过 <code>disabled</code> 属性指定是否禁用 input 组件",
                        source: `<ml-input v-model="model" placeholder="请输入内容" disabled></ml-input>`
                    },
                    {
                        key: "clearable",
                        title: "可清空",
                        tips: "使用 <code>clearable</code> 属性即可得到一个可清空的输入框",
                        source: `<ml-input 
                    v-model="model" 
                    placeholder="请输入内容" 
                    clearable>
                    </ml-input>`
                    },
                    {
                        key: "password",
                        title: "密码框",
                        tips: "使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框",
                        source: `<ml-input type="password" v-model="model" show-password></ml-input>`
                    },
                    {
                        key: "textarea",
                        title: "文本域",
                        desc: "用于输入多行文本信息，通过将 type 属性的值指定为 textarea。",
                        tips: "文本域高度可通过 <code>rows</code> 属性控制",
                        source: `<ml-input 
                        type="textarea" 
                        v-model="textarea" 
                        placeholder="请输入内容"  
                        :rows="2">
                    </ml-input>`
                    }, {
                        key: "autosize",
                        title: "可自适应文本高度的文本域",
                        desc: "通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数。",
                        source: `<ml-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea2">
                    </ml-input>`
                    }
                ]
            }
        }
    }
</script>

<block title="Input 输入框" desc="通过鼠标或键盘输入字符" :modules="modules" class="input-demo">
    <template slot="basic">
        <ml-input v-model="model" placeholder="请输入内容"></ml-input>
    </template>
    <template slot="disabled">
        <ml-input v-model="model2" placeholder="请输入内容" disabled></ml-input>
    </template>
    <template slot="clearable">
        <ml-input v-model="model3" placeholder="请输入内容" clearable></ml-input>
    </template>
    <template slot="password">
        <ml-input type="password" v-model="pwd" show-password></ml-input>
    </template>
    <template slot="textarea">
        <ml-input type="textarea" v-model="textarea" placeholder="请输入内容" :rows="2"></ml-input>
    </template>
    <template slot="autosize">
        <ml-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2">
        </ml-input>
    </template>
</block>

<style lang="scss">
    .input-demo .ml-input {
        width: 240px;
    }

    .input-demo .ml-textarea {
        width: 400px;
    }
</style>

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ------ | ------------------------------------------- | ------ |
| type | 类型 | string | text，textarea 和其他 原生 input 的 type 值 | text |