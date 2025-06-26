<template>
  <div class="w-full mb-4 flex justify-center">
    <div
      class="w-[95%] max-w-[95%] max-h-[300px] overflow-hidden overflow-y-scroll bg-yellow-200 rounded-xl p-2 text-sm"
      ref="bubble">
      <div v-html="renderedHtml" class="prose dark:text-white!"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps<{ text: string }>();

function decodeHtmlEntities(text: string) {
  const parser = new DOMParser()
  return parser.parseFromString(text, 'text/html').body.textContent || ''
}

const renderedHtml = computed(() => {
  const decoded = decodeHtmlEntities(props.text)
  return marked.parse(decoded)
})

</script>

<style></style>