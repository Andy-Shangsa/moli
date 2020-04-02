---
title: Image 图片
---

### Image 图片

<script>
	export default {
		data() {
			return {
				fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
				srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
			}
		}
	}
</script>
<div class="demo-image">
	<div class="block" v-for="fit in fits" :key="fit">
		<span class="demonstration">{{ fit }}</span>
		<ml-image style="width: 100px; height: 100px" :src="url" :fit="fit"></ml-image>
	</div>
</div>
<div class="demo-image__placeholder">
	<div class="block">
		<span class="demonstration">默认</span>
		<ml-image :src="src"></ml-image>
	</div>
	<div class="block">
		<span class="demonstration">自定义</span>
		<ml-image :src="src">
			<div slot="placeholder" class="image-slot">
				加载中<span class="dot">...</span>
			</div>
		</ml-image>
	</div>
</div>
<div class="demo-image__error">
  <div class="block">
    <span class="demonstration">默认</span>
    <ml-image></ml-image>
  </div>
  <div class="block">
    <span class="demonstration">自定义</span>
    <ml-image>
      <div slot="error" class="image-slot">
        <i class="ml-icon-image"></i>
      </div>
    </ml-image>
  </div>
</div>
<div class="demo-image__preview">
  <ml-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </ml-image>
</div>
<style lang="scss">
	.ml-image {
		    width: 300px;
    height: 200px;
	}
	.image-slot {
		display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
	}
	.demo-image .block, .demo-image__placeholder .block,.demo-image__error .block {
			padding: 30px 0;
			text-align: center;
			border-right: 1px solid #eff2f6;
			display: inline-block;
			width: 20%;
			box-sizing: border-box;
			vertical-align: top;
    }
	.demonstration {
    			display: block;
    			color: #8492a6;
    			font-size: 14px;
    			margin-bottom: 20px;
    		}
    .demo-image__placeholder .block,
    .demo-image__error .block 
    	 {
    		width: 49%;
    	}
    

</style>
