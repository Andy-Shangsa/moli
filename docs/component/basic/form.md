---
title: Form
---

### 表单

---

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<template>
<ml-form ref="form" :model="form" label-width="80px">
 <ml-form-item label="活动名称">
    <ml-input v-model="form.name"></ml-input>
  </ml-form-item>
  <!-- <ml-form-item label="活动区域">
    <ml-select v-model="form.region" placeholder="请选择活动区域">
      <ml-option label="区域一" value="shanghai"></ml-option>
      <ml-option label="区域二" value="beijing"></ml-option>
    </ml-select>
  </ml-form-item>
  <ml-form-item label="活动时间">
    <ml-col :span="11">
      <ml-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></ml-date-picker>
    </ml-col>
    <ml-col class="line" :span="2">-</ml-col>
    <ml-col :span="11">
      <ml-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></ml-time-picker>
    </ml-col>
  </ml-form-item> -->
  <ml-form-item label="即时配送">
    <ml-switch v-model="form.delivery"></ml-switch>
  </ml-form-item>
  <ml-form-item label="活动性质">
    <ml-checkbox-group v-model="form.type">
      <ml-checkbox label="美食/餐厅线上活动" name="type"></ml-checkbox>
      <ml-checkbox label="地推活动" name="type"></ml-checkbox>
      <ml-checkbox label="线下主题活动" name="type"></ml-checkbox>
      <ml-checkbox label="单纯品牌曝光" name="type"></ml-checkbox>
    </ml-checkbox-group>
  </ml-form-item>
  <ml-form-item label="特殊资源">
    <ml-radio-group v-model="form.resource">
      <ml-radio label="线上品牌商赞助"></ml-radio>
      <ml-radio label="线下场地免费"></ml-radio>
    </ml-radio-group>
  </ml-form-item>
  <ml-form-item label="活动形式">
    <ml-input type="textarea" v-model="form.desc"></ml-input>
  </ml-form-item>
  <ml-form-item>
    <ml-button type="primary" @click="onSubmit">立即创建</ml-button>
    <ml-button>取消</ml-button>
  </ml-form-item>
</ml-form>
</template>

<template>
<ml-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <ml-form-item label="活动名称" prop="name">
    <ml-input v-model="ruleForm.name" show-word-limit :maxlength="10"></ml-input>
  </ml-form-item>
  <!-- <ml-form-item label="活动区域" prop="region">
    <ml-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <ml-option label="区域一" value="shanghai"></ml-option>
      <ml-option label="区域二" value="beijing"></ml-option>
    </ml-select>
  </ml-form-item> -->
  <!-- <ml-form-item label="活动时间" required>
    <ml-col :span="11">
      <ml-form-item prop="date1">
        <ml-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></ml-date-picker>
      </ml-form-item>
    </ml-col>
    <ml-col class="line" :span="2">-</ml-col>
    <ml-col :span="11">
      <ml-form-item prop="date2">
        <ml-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></ml-time-picker>
      </ml-form-item>
    </ml-col>
  </ml-form-item> -->
  <ml-form-item label="即时配送" prop="delivery">
    <ml-switch v-model="ruleForm.delivery"></ml-switch>
  </ml-form-item>
  <ml-form-item label="活动性质" prop="type">
    <ml-checkbox-group v-model="ruleForm.type">
      <ml-checkbox label="美食/餐厅线上活动" name="type"></ml-checkbox>
      <ml-checkbox label="地推活动" name="type"></ml-checkbox>
      <ml-checkbox label="线下主题活动" name="type"></ml-checkbox>
      <ml-checkbox label="单纯品牌曝光" name="type"></ml-checkbox>
    </ml-checkbox-group>
  </ml-form-item>
  <ml-form-item label="特殊资源" prop="resource">
    <ml-radio-group v-model="ruleForm.resource">
      <ml-radio label="线上品牌商赞助"></ml-radio>
      <ml-radio label="线下场地免费"></ml-radio>
    </ml-radio-group>
  </ml-form-item>
  <ml-form-item label="活动形式" prop="desc">
    <ml-input type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" show-word-limit :maxlength="30" v-model="ruleForm.desc"></ml-input>
  </ml-form-item>
  <ml-form-item>
    <ml-button type="primary" @click="submitForm('ruleForm')">立即创建</ml-button>
    <ml-button @click="resetForm('ruleForm')">重置</ml-button>
  </ml-form-item>
</ml-form>
</template>
