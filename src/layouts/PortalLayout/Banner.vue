<script setup lang="ts">
import { NCarousel } from 'naive-ui'
import { ref } from 'vue'

import homeBanner from '@/assets/images/home_banner.jpg'

const images = ref([
  homeBanner,
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg'
])
</script>

<template>
  <div class="mb-4 h-[400px] w-full">
    <NCarousel
      draggable
      autoplay
    >
      <template
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          class="carousel-img"
          :src="image"
          alt=""
        />
      </template>
    </NCarousel>
  </div>
</template>

<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
