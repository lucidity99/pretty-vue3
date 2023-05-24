<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>快捷导航</span>
      </div>
    </template>
    <div v-for="(item, index) in list" :key="index" class="text item">
      {{ item.title }}
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const list = reactive([{ title: 'system' }])
</script>
