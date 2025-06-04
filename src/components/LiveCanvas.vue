<template>
	<div class="liveCanvas border-2 border-blue-500">
		<canvas id=liveCanvas></canvas>
		<span class="absolute hidden top-0 left-0 flex">
			<button @click="flick" class="bg-blue-500">Motion</button>
		</span>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'

import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';


// ============= 读配置 ==============

const props = defineProps<{
	modelUrl: string
}>()

// ============= 管理LiveCanvas ==============

// 创建refs
let app: PIXI.Application | null = null;
let model: Live2DModel | null = null;

const modelUrl = props.modelUrl

function flick() {
	model?.motion('Yulayula');
	console.log('flick');
}

onMounted(async () => {
	await nextTick();

	app = new PIXI.Application({
		view: document.getElementById("liveCanvas") as HTMLCanvasElement,  // 绑定canvas的ref
		autoStart: true,          // 是否开启自动播放
		width: 200,
		height: 200,
		backgroundAlpha: 0,
		// resizeTo: document.getElementsByTagName('main')[0],
	});


	// 加载Live2D模型
	model = await Live2DModel.from(modelUrl);

	if (app && model) {
		app.stage.addChild(model);
		model.x = -120;
		model.y = -50;
		model.scale.set(0.08);

		// 每一帧更新
		app.ticker.add(() => {
			model?.update(10);
		});
		model.on('hit', (hitAreaNames: string[]) => {
			console.log(hitAreaNames)
		});
	}


});

onBeforeUnmount(() => {
	model?.destroy();
	app?.destroy();
});

</script>

<style lang="scss" scoped></style>