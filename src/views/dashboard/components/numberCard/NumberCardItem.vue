<template>
  <el-card class="relative" shadow="hover">
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
          <i-ep-question-filled class="text-secondary" />
        </el-tooltip>
      </div>
    </div>
    <div
      class="absolute text-sm right-2 bottom-5"
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
  orange: 'bg-orange-200',
  blue: 'bg-blue-200',
  pink: 'bg-pink-200',
  purple: 'bg-purple-200',
  indigo: 'bg-indigo-200'
}
const textColors = {
  orange: 'text-orange-500',
  blue: 'text-blue-500',
  pink: 'text-pink-500',
  purple: 'text-purple-500',
  indigo: 'text-indigo-500'
}
</script>
