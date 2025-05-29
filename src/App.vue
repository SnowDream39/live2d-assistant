<template>
  <WindowsPanel class="h-full" :icons="icons" />
  <main class="h-full w-full flex-initial">
    <LiveCanvas class="absolute right-0 bottom-0" />
  </main>
</template>

<script setup lang="ts">
import { useWindowsStore } from './stores/windows';
import LiveCanvas from './components/LiveCanvas.vue';
import { icons } from './components/icons';
const windowsStore = useWindowsStore()






</script>
