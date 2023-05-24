<template>
  <div class="mo-tags" v-if="tags.show">
    <el-scrollbar>
      <ul v-click-outside="onClickOutside">
        <li
          v-for="(item, index) in tags.list"
          :key="item.path"
          :class="isActive(item.path) ? 'active' : ''"
        >
          <span
            class="cursor-pointer"
            @click="changeTab(item.path)"
            @contextmenu.prevent="openContext($event, index)"
            >{{ item.title }}</span
          >
          <i-ep-close @click="removeTag(item.path)"></i-ep-close>
        </li>
      </ul>
    </el-scrollbar>

    <div
      class="fixed flex flex-col px-2 py-1 text-xs leading-8 text-center bg-white rounded shadow-lg"
      :style="{
        left: `${contextmenuPositon.left}px`,
        top: `${contextmenuPositon.top}px`
      }"
      v-show="contextmenuShow"
    >
      <div @click="closeOther">
        <el-button :icon="Close" link size="small">关闭其他页签</el-button>
      </div>
      <div class="cursor-default" @click="closeAll">
        <el-button :icon="Minus" link size="small">关闭所有页签</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import { useTagsStore } from '~/store/tags'
import { useSidebarStore } from '~/store/sidebar'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { Close, Minus } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const tags = useTagsStore()
const useSidebar = useSidebarStore()

const isActive = (path: string) => {
  return path === route.fullPath
}

function changeTab(e: string) {
  router.push(e)
}

let contextmenuShow = ref(false)
let contextmenuPositon = ref({ top: 0, left: 0 })
let currentIndex = ref(0)

function openContext(e: MouseEvent, index: number) {
  contextmenuShow.value = true
  currentIndex.value = index
  console.log(e)

  contextmenuPositon.value = {
    top: e.y - 54,
    left: e.x - (useSidebar.collapse ? 64 : 200)
  }
}

const onClickOutside = () => {
  contextmenuShow.value = false
}

function removeTag(e: string) {
  const index = tags.list.findIndex((cur) => cur.path === e)

  tags.delTagsItem(index)
  const item = tags.list[index] ? tags.list[index] : tags.list[index - 1]
  if (item) {
    router.push(item.path)
  } else {
    router.push('/')
  }
}

// 设置标签
const setTags = (route: any) => {
  const isExist = tags.list.some((item) => {
    return item.path === route.fullPath
  })

  if (!isExist) {
    tags.setTagsItem({
      name: route.name,
      title: route.meta.title,
      path: route.fullPath
    })
  }
}
setTags(route)

onBeforeRouteUpdate((to) => {
  setTags(to)
})

// 关闭全部标签
const closeAll = async () => {
  tags.clearTags()

  await router.push('/')

  setTags(route)
}
// 关闭其他标签
const closeOther = () => {
  const curItem = tags.list.filter((item) => {
    return item.path === route.fullPath
  })
  tags.closeTagsOther(curItem)
}
</script>
