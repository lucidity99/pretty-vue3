<template>
  <el-card class="mt-4"> <MyEchart :options="options1" style="height: 300px"></MyEchart></el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import dayjs from 'dayjs'

let days = []
for (let i = 7; i > 0; i--) {
  days.push(dayjs().subtract(i, 'day').format('MM-DD'))
}

const options1 = reactive({
  title: {
    text: '整体数据趋势',
    textStyle: {
      color: '#2f408a',
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['展现', '阅读', '点赞', '评论', '收藏']
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '5%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: days
  },
  yAxis: {
    type: 'value'
  },
  color: ['#3f7ef8', '#31e0a1', '#fa2256', '#ffb545', '#6ac4f3'],
  series: [
    {
      name: '展现',
      type: 'line',
      smooth: true,
      areaStyle: { color: '#f5f7fc' },
      data: [200, 360, 901, 399, 800, 1330, 1509]
    },
    {
      name: '阅读',
      type: 'line',
      smooth: true,
      data: [49, 100, 191, 234, 290, 330, 310]
    },
    {
      name: '点赞',
      type: 'line',
      smooth: true,
      data: [5, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '评论',
      type: 'line',
      smooth: true,
      data: [4, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '收藏',
      type: 'line',
      smooth: true,
      data: [8, 16, 43, 68, 90, 119, 210]
    }
  ]
})
</script>
