<template>
	<view class="content"> 
		<view class="">
			标题：  
			<view v-html="datailData.title"></view>
		</view>
		<view class="">
			time：  
			<view v-html="datailData.time"></view>
		</view>
		<view class="">
			content： 
			<view v-html="datailData.content"></view>
		</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datailData: "",
			}
		},
		onLoad(option) {  
			const id = option.id ? JSON.parse(decodeURIComponent(option.id)) : '61076b2fd1462a00011fe774';
			this.handleLoad(id)
		},
		onReachBottom() { 
		},
		methods: { 
			handleLoad(id) {  
				let that = this
				uniCloud.callFunction({
					name: "getDetail",
					data: {
						id
					},
					success(res) {  
						that.datailData = res.result.data[0]
					},
					fail(err) {
						console.log(err)
					}
				}) 
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
