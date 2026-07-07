<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white text-black font-sans">
    <!-- Блок 404 с изображением -->
  
    <!-- Текст ошибки -->
    <div class="text-center mt-[-2vw]">
      <h2 class="text-4xl font-bold mb-4">PAGE NOT FOUND</h2>
      <p class="text-gray-600 mb-8 max-w-md">
        It's entirely possible the page you're looking for has gone on a permanent hiatus, 
        been canceled, or is just running late.
      </p>
      
      <NuxtLink 
        to="/" 
        class="bg-black text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
      >
        BACK TO HOME
      </NuxtLink>
    </div>
  </div>
</template>