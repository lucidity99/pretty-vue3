<template>
  <el-card shadow="hover" class="h-[342px]">
    <template #header>
      <div class="flex justify-between card-header">
        <span>待办</span>
        <el-link><i-ep-more-filled /></el-link>
      </div>
    </template>
    <ul>
      <li v-for="(item, index) in todoList" :key="index" class="py-1 text-sm">
        <el-checkbox>
          {{ item.title }}
        </el-checkbox>
      </li>
    </ul>
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
