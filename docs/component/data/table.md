---
title: Table 表格
---

<script>
  export default {
    data() {
      return {
        multipleSelection: [],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
  }
</script>

<template>
  <ml-table ref="multipleTable" :data="tableData" style="width: 100%">
    <ml-table-column type="selection" width="55">
    </ml-table-column>
    <ml-table-column prop="date" label="日期" width="180">
    </ml-table-column>
    <ml-table-column prop="name" label="姓名" width="180">
    </ml-table-column>
    <ml-table-column prop="address" label="地址">
    </ml-table-column>
  </ml-table>
  <ml-table :data="tableData" style="width: 100%" max-height="250">
    <ml-table-column fixed prop="date" label="日期" width="150">
    </ml-table-column>
    <ml-table-column prop="name" label="姓名" width="120">
    </ml-table-column>
    <ml-table-column prop="province" label="省份" width="120">
    </ml-table-column>
    <ml-table-column prop="city" label="市区" width="120">
    </ml-table-column>
    <ml-table-column prop="address" label="地址" width="300">
    </ml-table-column>
    <ml-table-column prop="zip" label="邮编" width="120">
    </ml-table-column>
    <ml-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <ml-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
          移除
        </ml-button>
      </template>
    </ml-table-column>
  </ml-table>

  <div style="margin-top: 20px">
    <ml-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</ml-button>
    <ml-button @click="toggleSelection()">取消选择</ml-button>
  </div>

</template>

<style lang="scss">
  table {
    margin: 0;
  }

  .ml-table {
    margin-top: 20px;
  }
</style>