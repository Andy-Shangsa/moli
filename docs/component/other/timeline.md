---
title: Timeline 时间线
---

<script>
    export default {
        data() {
            return {
                reverse: true,
                activities: [{
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }],
                activities2: [{
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'ml-icon-more'
                }, {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87'
                }, {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large'
                }, {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46'
                }]
            };
        }
    };
</script>

<div class="block">
    <div class="radio">
        排序：
        <ml-radio-group v-model="reverse">
            <ml-radio :label="true">倒序</ml-radio>
            <ml-radio :label="false">正序</ml-radio>
        </ml-radio-group>
    </div>
    <ml-timeline :reverse="reverse">
        <ml-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
            {{activity.content}}
        </ml-timeline-item>
    </ml-timeline>
</div>

<div class="block">
    <ml-timeline>
        <ml-timeline-item v-for="(activity, index) in activities2" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
            {{activity.content}}
        </ml-timeline-item>
    </ml-timeline>
</div>

<div class="block">
    <ml-timeline>
        <ml-timeline-item timestamp="2018/4/12" placement="top">
            <div class="card">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
            </div>
        </ml-timeline-item>
        <ml-timeline-item timestamp="2018/4/3" placement="top">
            <div class="card">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
            </div>
        </ml-timeline-item>
        <ml-timeline-item timestamp="2018/4/2" placement="top">
            <div class="card">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
            </div>
        </ml-timeline-item>
    </ml-timeline>
</div>

<style>
    .radio {
        margin-bottom: 20px;
    }

    .card {
        padding: 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
    }
</style>