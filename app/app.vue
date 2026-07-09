<template>
  <div class="bg-black text-white px-6 min-h-screen">
  
    <TheNavbar />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from './components/ui/TheNavbar.vue';
useHead({
  title: 'TV Shows in french with subtitles',
  link: [
    {
      key:'favicon',
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.jpg'
    }
  ]
})

</script>

<style>

</style>
