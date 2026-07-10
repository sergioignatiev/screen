<template>
  <div class="bg-black text-white px-6  fixed -top-10 w-full">
  
    
    <NuxtPage />
 
  </div>
</template>

<script lang="ts" setup>
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