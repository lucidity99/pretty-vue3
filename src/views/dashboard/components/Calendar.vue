<template>
  <el-card class="mt-4"><el-calendar v-model="dateVal" /></el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dateVal = ref(new Date())
</script>
