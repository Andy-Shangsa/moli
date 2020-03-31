---
title: Pagination 分页
---

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <ml-pagination
    layout="prev, pager, next"
    :total="50">
  </ml-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <ml-pagination
    layout="prev, pager, next"
    :total="1000">
  </ml-pagination>
</div>

<ml-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</ml-pagination>

<ml-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</ml-pagination>

<ml-pagination
  small
  layout="prev, pager, next"
  :total="50">
</ml-pagination>

 <div class="block">
    <span class="demonstration">显示总数</span>
    <ml-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </ml-pagination>
  </div>
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <ml-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </ml-pagination>
  </div>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <ml-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </ml-pagination>
  </div>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <ml-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </ml-pagination>
  </div>

<style>
.ml-pagination {
    margin: 10px 0;
}
</style>
