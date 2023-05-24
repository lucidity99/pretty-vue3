<template>
  <div class="w-8 cursor-pointer">
    <el-badge is-dot :hidden="!message" @click="visible = true">
      <i-ep-bell class="text-sm" />
    </el-badge>
    <el-drawer class="no-header" v-model="visible" size="80%" append-to-body>
      <MessageCenter />
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message: number = 2

let visible = ref(false)

import MessageCenter from '~/views/messageCenter/index.vue'
</script>

<style lang="scss">
.el-drawer.no-header {
  overflow: visible;
  .el-drawer__header {
    height: 0;
    padding: 0;
    margin: 0;
  }
  .el-drawer__close-btn {
    background-color: var(--el-color-primary);
    position: absolute;
    left: -36px;
    top: 30%;
    border-radius: 4px 0 0 4px;
    color: #fff;
    padding: 8px;
  }
  .el-drawer__body {
    padding: 0;
  }
}
</style>
