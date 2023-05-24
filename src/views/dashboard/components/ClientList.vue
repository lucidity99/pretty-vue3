<template>
  <el-card shadow="hover">
    <template #header>
      <div class="flex justify-between card-header">
        <span>新增客户(30)</span>
        <el-link><i-ep-more-filled /></el-link>
      </div>
    </template>
    <el-table :data="tableData" :show-header="false" v-loading="loading" height="240">
      <el-table-column prop="name" label="客户名称" min-width="300" show-overflow-tooltip fixed />
      <el-table-column prop="city" label="城市" min-width="100" show-overflow-tooltip />
      <el-table-column prop="updated" label="更新时间" min-width="200" />
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { useTable } from '~/hooks/table'

import clientApi from '~/api/client'

const { tableData, loading } = useTable(clientApi.getClientList)
</script>

<style scoped></style>
