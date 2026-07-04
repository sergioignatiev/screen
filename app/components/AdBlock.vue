<template>
  <ClientOnly>
    <div :id="containerId" class="yandex-ad-container"/>
  </ClientOnly>
</template>

<script setup>
const containerId = `yandex-rtb-${Date.now()}`

onMounted(() => {
  // 1. Загружаем скрипт Яндекса
  if (!document.getElementById('yandex-rtb-script')) {
    const script = document.createElement('script')
    script.id = 'yandex-rtb-script'
    script.async = true
    script.src = 'https://yandex.ru/adsdk/js/rbad.js'
    document.head.appendChild(script)
  }

  // 2. Показываем тестовый блок
  setTimeout(() => {
    if (window.Ya?.Context?.AdvManager) {
      Ya.Context.AdvManager.render({
        blockId: 'R-A-000000-0',     // официальный тестовый блок
        renderTo: containerId,
        async: true,
        // Дополнительные параметры для лучшего теста
        width: 300,
        height: 250
      })
    } else {
      console.warn('Яндекс AdvManager не загрузился')
    }
  }, 1000)
})
</script>

<style scoped>
.yandex-ad-container {
  max-width: 100%;
  margin: 20px auto;
  background: #f8f8f8;
  border: 1px solid #ddd;
}
</style>