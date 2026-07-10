<template>
  <div class="bg-black text-white px-6 min-h-screen">
  
    <TheNavbar />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from '~/components/ui/TheNavbar.vue'
import TheFooter from '~/components/ui/TheFooter.vue'
useHead({
  title: 'TV Shows in french with subtitles',
  link: [
    {
      key:'favicon',
      rel: 'icon',
      
      href: '/logo.jpg'
    }
  ]
})

</script>

<style>

</style>
