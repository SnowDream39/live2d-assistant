<template>
  <WindowsPanel class="h-full" :icons="icons" />
  <main class="h-full w-full flex-initial">
    <LiveCanvas class="absolute right-0 bottom-0" :model-url="modelUrl" />
  </main>
</template>

<script setup lang="ts">
import LiveCanvas from '../src/components/LiveCanvas.vue';
import { icons } from '../src/components/icons';

const HiyoriUrl = '/hiyori_free_zh/runtime/hiyori_free_t08.model3.json'
const modelUrl = '/mao_pro_zh/runtime/mao_pro.model3.json'

</script>
