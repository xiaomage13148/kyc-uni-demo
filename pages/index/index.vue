<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="./ocr_demo" hover-class="navigator-hover">
			<button type="default">跳转OCR Demo页面</button>
		</navigator>
		<navigator url="./face_demo" hover-class="navigator-hover">
			<button type="default">跳转刷脸 Demo页面</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
