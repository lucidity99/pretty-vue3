<template>
  <el-card class="mt-4"> <MyEchart :options="options1" style="height: 300px"></MyEchart></el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const options1 = reactive({
  title: {
    text: '成交趋势'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
})
</script>
