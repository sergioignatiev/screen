<template>
  <main class="mx-auto max-w-6xl px-6 py-10 text-white">
    <section class="mb-10">
      <h1 class="mb-4 text-4xl font-bold">
        Watch French Movies and TV Shows with Subtitles
      </h1>

      <p class="max-w-3xl text-zinc-300">
        Discover French movies and TV shows with subtitles. Watch French
        content online and improve your listening skills with accurate
        subtitles and immersive viewing.
      </p>
    </section>

    <section class="mb-12">
      <div class="aspect-video overflow-hidden rounded-xl bg-zinc-900">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=slcihrr9&public_id=samples%2Felephants"
          title="French movie and TV show video player"
          class="h-full w-full"
          loading="lazy"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        />
      </div>
    </section>

    <section class="grid gap-8 md:grid-cols-3">
      <article class="rounded-xl bg-zinc-900 p-6">
        <h2 class="mb-3 text-xl font-semibold">
          French Movies
        </h2>

        <p class="text-zinc-300">
          Explore French films from different genres with subtitles.
          Discover classic cinema and modern releases.
        </p>
      </article>

      <article class="rounded-xl bg-zinc-900 p-6">
        <h2 class="mb-3 text-xl font-semibold">
          French TV Shows
        </h2>

        <p class="text-zinc-300">
          Watch French series with subtitles and follow your favorite
          characters episode by episode.
        </p>
      </article>

      <article class="rounded-xl bg-zinc-900 p-6">
        <h2 class="mb-3 text-xl font-semibold">
          Learn French Through Videos
        </h2>

        <p class="text-zinc-300">
          Improve vocabulary, pronunciation and listening comprehension by
          watching French content with subtitles.
        </p>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Watch French Movies and TV Shows with Subtitles | Screen',
  description:
    'Watch French movies and TV shows with subtitles online. Discover French films and series with accurate subtitles and improve your French through immersive viewing.',
  ogTitle:
    'Watch French Movies and TV Shows with Subtitles | Screen',
  ogDescription:
    'Discover French movies and TV shows with subtitles. Watch online and improve your French listening skills.',
  ogImage: '/logo.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  {
    '@type': 'WebSite',
    name: 'Screen',
    url: 'https://yourdomain.com'
  },
  {
    '@type': 'VideoObject',
    name: 'French video with subtitles',
    description:
      'French movie and TV show video with subtitles.',
    thumbnailUrl: '/logo.jpg',
    uploadDate: '2026-01-01'
  }
])
</script>