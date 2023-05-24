<template>
  <el-aside width="200px" class="fixed">
    <el-menu class="shadow" :class="sidebar.collapse" :collapse="sidebar.collapse" router>
      <SidebarItem :item="item" v-for="item in items" :key="item.name" />
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { useSidebarStore } from '~/store/sidebar'

const router = useRouter()
const items = router.options.routes
  .find((val) => val.name === 'Home')
  ?.children?.filter((val) => !val.hidden)

const sidebar = useSidebarStore()
</script>
