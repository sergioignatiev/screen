<template>
  <div class="flex gap-4 bg-black text-white">
    <NuxtLink v-for="link in links" :key="link.path" :to="link.path">
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const links = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movies' },
  { name: 'Series', path: '/series' }
]
</script>

<style>

</style>