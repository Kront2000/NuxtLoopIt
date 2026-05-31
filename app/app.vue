<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'LoopIt'
const description = 'Традиционные ToDo-приложения застряли в синхронном прошлом. Мы переосмыслили управление задачами, внедрив архитектуру, вдохновленную ядром Node.js. Добро пожаловать в LoopIt.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/interface.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
