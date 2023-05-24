<template>
  <div class="v-header">
    <div class="mx-4 text-lg logo">Pretty Vue</div>
    <!-- 折叠按钮 -->
    <div class="inline-flex items-center h-full text-xl" @click="collapseChage">
      <i-ep-expand class="text-sm" v-if="sidebar.collapse" />
      <i-ep-fold class="text-sm" v-else />
    </div>

    <div class="flex items-center pr-4 ml-auto">
      <el-switch v-model="darkMode" inline-prompt class="mx-2" @change="toggleDark()" />

      <div class="flex items-center">
        <!-- 消息中心 -->
        <Message class="ml-4" />
        <a href="https://github.com/lucidity99/mocha-vue3-system" taret="_blank">
          <i-ep-reading class="ml-4"
        /></a>

        <!-- 用户名下拉菜单 -->
        <el-dropdown class="mx-2" trigger="click" @command="handleCommand">
          <span class="flex items-center cursor-pointer">
            <el-avatar class="ml-2" :size="24" :src="imgurl" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/lucidity99/mocha-vue3-system" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSidebarStore } from '~/store/sidebar'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import imgurl from '~/assets/images/img.jpg'

import Message from './Message.vue'

const isDark = useDark()
let darkMode = ref(false)
darkMode.value = isDark.value

const toggleDark = useToggle(isDark)

const sidebar = useSidebarStore()
// 侧边栏折叠
const collapseChage = () => {
  sidebar.handleCollapse()
}

onMounted(() => {
  if (document.body.clientWidth < 1200) {
    collapseChage()
  }
})

// 用户名下拉菜单选择事件
const router = useRouter()
const handleCommand = (command: string) => {
  if (command == 'loginout') {
    userStore.userLogout()
    router.push('/login')
  } else if (command == 'user') {
    router.push('/system/profile')
  }
}
</script>
<style scoped lang="scss">
.v-header {
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 0;
  border-bottom: 1px solid var(--el-border-color);

  .logo {
    color: var(--el-color-primary);
  }
}
</style>
