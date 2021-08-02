<template>
	<view class="content"> 
		<view v-for="(item, index) in articleList" :key="index">
			<navigator :url="'/pages/detail/index?id='+ encodeURIComponent(JSON.stringify(item.id))">
				{{item.title}}
				<image :src="item.cover" mode=""></image>
			</navigator>
		</view> 
		{{
			isMore ? '--- 到底了 ---' : ''
		}}
		
		<navigator url="/pages/addNews/index">
			<button type="default">go发布</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: 1,
				limit: 8,
				isMore: false,
				articleList: []
			}
		},
		onLoad() { 
			this.getData()
		},
		onReachBottom() {
			if(!this.isMore) {
				++this.page
				this.getData() 
			}
		},
		methods: {
			handleDetail(id) {
				console.log(id)
			},
			getData() {
				let that = this
				let page = this.page
				let limit = this.limit 
				uniCloud.callFunction({
					name: "article",
					data: {
						page,
						limit 
					},
					success(res) {console.log(page)
						let list = res.result.data 
						that.articleList = page === 1 ? list : that.articleList.concat(list)
						that.isMore = list.length < limit ? true : false
						console.log(res)
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
