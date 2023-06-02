<template>
  <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import dayjs from 'dayjs'

let days = []
for (let i = 7; i > 0; i--) {
  days.push(dayjs().subtract(i, 'day').format('MM-DD'))
}

const options = reactive({
  title: {
    text: '访问趋势',
    left: 'left',
    textStyle: {
      color: '#2f408a',
      fontWeight: 'normal'
    }
  },
  xAxis: {
    type: 'category',
    data: days
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '5%',
    containLabel: true
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      smooth: true
    }
  ]
})
</script>
