<template>
	<div class="liveCanvas border-2 border-blue-500">
		<canvas id=liveCanvas></canvas>
		<span class="absolute bottom-10 right-100 flex">
			<button @click="flick" class="bg-blue-500">Motion</button>
		</span>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

import * as PIXI from 'pixi.js';
import { Assets } from '@pixi/assets'
import { Live2DModel } from 'pixi-live2d-display/cubism4';
// 创建refs
let app: PIXI.Application | null = null;
let model: Live2DModel | null = null;

const HiyoriUrl = '/hiyori_free_zh/runtime/hiyori_free_t08.model3.json'
const MaoUrl = '/mao_pro_zh/runtime/mao_pro.model3.json'
const modelUrl = 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json'

function flick() {
	model?.motion('Yulayula');
	console.log('flick');
}

onMounted(async () => {
	await nextTick();

	app = new PIXI.Application({
		view: document.getElementById("liveCanvas") as HTMLCanvasElement,  // 绑定canvas的ref
		autoStart: true,          // 是否开启自动播放
		width: 600,
		height: 600,
		backgroundAlpha: 0,
		// resizeTo: document.getElementsByTagName('main')[0],
	});


	// 加载Live2D模型
	model = await Live2DModel.from(MaoUrl);

	if (app && model) {
		app.stage.addChild(model);
		model.x = 280;
		model.y = 150;
		model.scale.set(0.08);

		// 每一帧更新
		app.ticker.add(() => {
			model?.update(10);
		});
		model.on('hit', (hitAreaNames) => {
			console.log(hitAreaNames)
		})
	}

}

);

onBeforeUnmount(() => {
	model?.destroy();
	app?.destroy();
});



</script>

<style lang="scss" scoped></style>