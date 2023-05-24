<template>
  <div class="p-4">
    <div class="flex items-center justify-between p-4 mb-4">
      <div class="flex items-center">
        <el-avatar size="large" class="mr-4" :src="imgurl" />
        <div>
          <p class="mb-2">早安, mocha, 开始您一天的工作吧！</p>
          <p class="text-sm text-secondary">今日晴，20℃ - 32℃！</p>
        </div>
      </div>
      <div class="flex">
        <div class="mr-10 text-right">
          <p class="mb-2 text-sm text-secondary">待办</p>
          <p>2/10</p>
        </div>
        <div class="mr-10 text-right">
          <p class="mb-2 text-sm text-secondary">项目</p>
          <p>5</p>
        </div>
        <div class="text-right">
          <p class="mb-2 text-sm text-secondary">应收</p>
          <p>5000</p>
        </div>
      </div>
    </div>

    <NumberCard />
    <el-row :gutter="16" class="mt-4">
      <el-col :span="16"> <ClientList /></el-col>
      <el-col :span="8"><TodoList /></el-col>
    </el-row>
    <LineChart />
    <el-row :gutter="16" class="mt-4">
      <el-col :span="8"
        ><el-card><PieChart /></el-card
      ></el-col>
      <el-col :span="8"
        ><el-card><Chart1 /></el-card
      ></el-col>
      <el-col :span="8"
        ><el-card><Chart2 /></el-card
      ></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import imgurl from '~/assets/images/img.jpg'
import PieChart from './components/PieChart.vue'

import NumberCard from './components/numberCard/index.vue'
import TodoList from './components/TodoList.vue'
import LineChart from './components/LineChart.vue'
import Chart1 from './components/Chart1.vue'
import Chart2 from './components/Chart2.vue'
import ClientList from './components/ClientList.vue'
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>
