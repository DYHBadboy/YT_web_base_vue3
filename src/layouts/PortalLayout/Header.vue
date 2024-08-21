<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = ref([
  { label: '首页', url: '/' },
  { label: '课程', url: '/courses' },
  { label: '教师', url: '/teachers' },
  { label: '学生', url: '/students' },
  { label: '关于', url: '/about' }
])
</script>

<template>
  <div class="container mx-auto flex h-16 items-center justify-between">
    <div class="text-xl font-semibold">教务系统平台</div>
    <div class="flex items-center space-x-6">
      <template
        v-for="(item, index) in navItems"
        :key="index"
      >
        <div
          class="cursor-pointer"
          @click="
            () =>
              router.push({
                path: item.url
              })
          "
        >
          {{ item.label }}
        </div>
      </template>
    </div>
  </div>
</template>
