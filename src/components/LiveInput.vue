<template>
  <div class="relative overflow-hidden">
    <textarea type="email" id="email" v-model="text" @keydown.enter="handleEnter"
      class="w-[calc(100%-8px)] h-12 px-4 py-3 mt-1 mx-1 max-h-30 resize-none rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none overflow-auto focus:h-20 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
      placeholder="向小助手问你想要的任何问题" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const text = ref<string>("");
const emit = defineEmits<{
  submit: [text: string];
}>();

function handleEnter(event: KeyboardEvent) {
  if (event.shiftKey) {
    return; // 直接返回，不执行后续逻辑
  }
  // 普通 Enter 键：阻止默认换行行为，并执行提交逻辑
  event.preventDefault();
  emit('submit', text.value);
  text.value = '';
}
</script>

<style scoped>
textarea::-webkit-scrollbar {
  display: none;
}
</style>