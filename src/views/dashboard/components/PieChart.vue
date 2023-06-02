<template>
  <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MyEchart from '~/components/echarts/MyEchart.vue'

const options = reactive({
  title: {
    text: '访问来源',

    left: 'left',
    textStyle: {
      color: '#2f408a',
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: 0,
    left: 'center'
  },

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直链' },
        { value: 580, name: 'Email' },
        { value: 484, name: '广告' },
        { value: 300, name: '视频' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
</script>
