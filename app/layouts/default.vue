<script lang="ts" setup>
import TheNavbar from '~/components/ui/TheNavbar.vue'
import TheFooter from '~/components/ui/TheFooter.vue'

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  titleTemplate: (title) => {
    return title ? `${title} | Screen` : 'Screen'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  description:
    'Watch French TV shows with subtitles online. Discover series with accurate subtitles and improve your French through immersive viewing.',
  ogImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600'
})
useHead({
   link: [
    {
      key:'favicon',
      rel: 'icon',
      href: '/logo.jpg'
    }
  ]
})
</script>

<template>
  <div class="bg-black text-white px-6 min-h-screen">
    <TheNavbar />
    <NuxtPage />
    <TheFooter />
  </div>
</template>