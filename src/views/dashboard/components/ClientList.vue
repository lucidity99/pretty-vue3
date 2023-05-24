<template>
  <el-card>
    <el-table :data="tableData" border stripe ref="multipleTable" v-loading="loading" height="300">
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
