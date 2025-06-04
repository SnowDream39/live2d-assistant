<template>
  <div class="flex flex-col w-51">
    <LiveBubble :text="showText" />
    <LiveCanvas class="" :model-url="modelUrl" />
    <LiveInput @submit="handleInput" />
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import LiveBubble from './LiveBubble.vue';
import LiveCanvas from './LiveCanvas.vue';
import LiveInput from './LiveInput.vue';
import axios from 'axios';
import postSSE from '@/utils/postSSEzju';

const HiyoriUrl = '/hiyori_free_zh/runtime/hiyori_free_t08.model3.json'
const modelUrl = '/mao_pro_zh/runtime/mao_pro.model3.json'

// ============  管理对话   ==============

const baseUrl = 'https://open.zju.edu.cn/api/proxy/api/v1'
const config = {
  //"AppKey": "d0vscsn3gkqs8ledrf90",
  //"ApiKey": "d0vtv241cj98coi9kqh0",
  "AppKey": "cve0g020bha5qsc85cmg",
  "ApiKey": "d0vus9c1cj98coi9kvqg",
  "UserId": "759723417"
}

const headers = {
  'Content-Type': 'application/json',
  'Apikey': config.ApiKey
};

let showText = ref('');
const inputText = ref<string>('');
let AppConversationID = '';


async function createConversation(): Promise<string> {
  // 创建对话
  let data = {
    AppKey: config.AppKey,
    UserId: config.UserId
  }

  let response = await axios.post(baseUrl + '/create_conversation', data, { headers });

  return response.data.Conversation.AppConversationID;
}


async function chat(text: string) {
  showText.value = '';
  await postSSE(baseUrl + '/chat_query', {
    AppKey: config.AppKey,
    AppConversationID: AppConversationID,
    UserId: config.UserId,
    Query: text,
    ResponseMode: "streaming"
  }, updateChat, { headers })

}

onMounted(async () => {
  AppConversationID = await createConversation();
  await chat("你好！");
})

// ============ 管理DOM ===============

function handleInput(text: string) {
  inputText.value = text;
  chat(text);
}

function updateChat(event: any) {
  if (event.event === 'message_output_start') {

  } else if (event.event === 'message') {
    showText.value += event.answer;
  } else if (event.event === 'message_end') {

  }
}

</script>