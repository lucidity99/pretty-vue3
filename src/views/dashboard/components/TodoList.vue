<template>
  <el-card class="h-[342px]">
    <template #header>
      <div class="flex justify-between card-header">
        <span>待办</span>
        <el-link>查看更多</el-link>
      </div>
    </template>
    <div v-for="(item, index) in todoList" :key="index" class="text">
      {{ item.title }}
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const todoList = reactive([
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要写100行代码加几个bug吧',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: false
  },
  {
    title: '今天要修复100个bug',
    status: true
  },
  {
    title: '今天要写100行代码加几个bug吧',
    status: true
  }
])
</script>
