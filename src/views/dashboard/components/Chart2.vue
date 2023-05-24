<template>
  <MyEchart :options="options" style="height: 300px"></MyEchart>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const options = reactive({
  title: {
    text: '成交占比',
    subtext: '2023.3.28',
    left: 'left'
  },
  legend: {
    top: 'bottom'
  },

  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
})
</script>
