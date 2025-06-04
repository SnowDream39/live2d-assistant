<template>
  <div class="flex flex-col">

    <LiveCanvas class="" :model-url="modelUrl" />
    <LiveInput />
  </div>
</template>


<script setup lang="ts">
import LiveCanvas from './LiveCanvas.vue';
import LiveInput from './LiveInput.vue';

const HiyoriUrl = '/hiyori_free_zh/runtime/hiyori_free_t08.model3.json'
const modelUrl = '/mao_pro_zh/runtime/mao_pro.model3.json'

</script>