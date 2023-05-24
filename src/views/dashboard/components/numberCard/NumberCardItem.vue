<template>
  <el-card class="relative">
    <div class="flex">
      <div
        class="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
        :class="bgcolors[color  as keyof typeof textColors]"
      >
        <MoIcon :icon-name="icon" class="text-xl text-white"></MoIcon>
      </div>
      <div>
        <div class="text-2xl">{{ count }}</div>
        <div class="text-sm text-gray-500">{{ title }}</div>
      </div>
      <div class="absolute right-2 top-2">
        <el-tooltip :content="desc" effect="light">
          <el-icon class="text-gray-300"
            ><el-icon><QuestionFilled /></el-icon
          ></el-icon>
        </el-tooltip>
      </div>
    </div>
    <div
      class="absolute text-sm text-red-900 right-2 bottom-2 dark:text-red-400"
      :class="textColors[color  as keyof typeof textColors]"
    >
      {{ rate }}
    </div>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  count: string
  rate: string
  desc: string
  icon: any
  color: string
}>()

// tailwind 不支持动态拼接class，
// 需要预定义再使用
const bgcolors = {
  orange: 'bg-orange-400',
  blue: 'bg-blue-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-400',
  indigo: 'bg-indigo-400'
}
const textColors = {
  orange: 'text-orange-700',
  blue: 'text-blue-700',
  pink: 'text-pink-700',
  purple: 'text-purple-700',
  indigo: 'text-indigo-700'
}
</script>
