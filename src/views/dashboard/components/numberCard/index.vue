<template>
  <el-row :gutter="16">
    <el-col :span="6" v-for="item in cardData">
      <NumberCardItem
        :title="item.title"
        :desc="item.desc"
        :count="item.count"
        :rate="item.rate"
        :icon="item.icon"
        :color="item.color"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import NumberCardItem from './NumberCardItem.vue'

const cardData = [
  {
    title: '访问数',
    count: '134,226',
    desc: 'visit numbers',
    rate: '+25.8%',
    icon: 'ep-ice-cream',
    color: 'orange'
  },
  {
    title: '下载量',
    count: '8,476',
    desc: 'download ',
    rate: '+0.8%',
    icon: 'ep-lollipop',
    color: 'blue'
  },
  {
    title: '销售额',
    count: '134,226',
    desc: 'sales s',
    rate: '+9.16%',
    icon: 'ep-coffee-cup',
    color: 'indigo'
  },
  {
    title: '新用户数',
    count: '912',
    desc: 'new visitors',
    rate: '+5.1%',
    icon: 'ep-watermelon',
    color: 'purple'
  }
]
</script>
