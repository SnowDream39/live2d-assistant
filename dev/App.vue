<template>
  <WindowsPanel class="h-full" />
  <main class="h-full w-full flex-initial">
    <LiveWidget class="absolute right-0 bottom-0" :model-url="modelUrl" />
  </main>
</template>

<script setup lang="ts">
import LiveWidget from '../src/components/LiveWidget.vue';

const HiyoriUrl = '/hiyori_free_zh/runtime/hiyori_free_t08.model3.json'
const modelUrl = '/mao_pro_zh/runtime/mao_pro.model3.json'

</script>
