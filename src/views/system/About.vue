<template>
  <div v-watermark>
    <PageHeader title="关于">
      <a target="_blank">Pretty Vue</a> 是一个基于Vue3.0、Vite、 Element Plus
      、TypeScript、Tailwind CSS 的玩具项目，主要用于系统UI改造和展示，尝试更多样的UI可能性。
      
    </PageHeader>

    <div class="container">
      <el-card>
        <template #header> 项目信息 </template>
        <div v-color="'red'">sdfsdf</div>
        <el-descriptions border>
          <el-descriptions-item label="版本信息"></el-descriptions-item>
          <el-descriptions-item label="文档地址"></el-descriptions-item>
          <el-descriptions-item label="最后构建时间">{{
            lastBuildTime
          }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
      <el-card class="mt-2">
        <template #header> 生产环境依赖 </template>
        <el-descriptions border>
          <el-descriptions-item
            class-name="desc-ct"
            label-class-name="desc-label"
            :label="item"
            v-for="(item, index) in Object.keys(dependencies)"
            >{{ dependencies[item] }}</el-descriptions-item
          >
        </el-descriptions>
      </el-card>
      <el-card class="mt-4">
        <template #header> 开发环境依赖 </template>
        <el-descriptions border>
          <el-descriptions-item
            class-name="desc-ct"
            label-class-name="desc-label"
            :label="item"
            v-for="(item, index) in Object.keys(devDependencies)"
            >{{ devDependencies[item] }}</el-descriptions-item
          >
        </el-descriptions>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__;
const { dependencies, devDependencies } = pkg;
</script>

<style lang="scss">
.desc-ct {
  width: 10%;
}
.desc-label {
  width: 20%;
}
</style>
