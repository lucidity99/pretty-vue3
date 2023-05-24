<template>
  <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const options = reactive({
  title: {
    text: '访问趋势',
    left: 'left'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
</script>
