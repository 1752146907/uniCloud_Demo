<template>
	<view class="content"> 
		<view class="">
			标题： <input type="text" :value="title" placeholder="请输入内容" @input="bindTitle" />
		</view>
		<view class="">
			time： <input type="text" :value="time" placeholder="请输入内容" @input="bindTime" />
		</view>
		<view class="">
			content： <textarea maxlength="-1" :value="content" placeholder="请输入内容" auto-height @input="bindTextAreaBlur" />
		</view>
		<button type="default" @click="handleSubmit()">发布</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Web 3.0峰会将在四川成都举办 引导转型IPFS分布式存储新基建赛道",
				time: "2021-07-08 17:09:13",
				content: `<div data-v-7c5be890=""><p>Web3.0中国峰会暨IPFS区块链分布式存储行业大会，将于7月15日-17日在成都盛大举办。<strong>这是国内顶端的区块链分布式存储行业大会</strong>，目前已成功举办四届，是迄今为止，国内举行过的规模最大、人数最多、规格最高的IPFS与区块链分布式存储行业盛会<img src="https://img.jinse.com/5400946_image3.png" alt="5400946_image3.png"></p>

<p>活动已得到当地政府与相关部门的大力支持，由成都市人民政府、 四川省经济和信息化厅、重庆市经济和信息化委员会、中国电子 信息产业集团有限公司、成都市经济和信息化局、成都市博览局等联合组织。</p>

<p>6月18日四川关停kuang场后，7月15日四川政府主办Web3.0中国峰会，这意味着什么？</p>

<h1>01.</h1>

<h1>IPFS/Filecoin是Web3.0的核心</h1>

<p>IPFS/Filecoin是未来的区块链技术的主流之一，既引导转型IPFS分布式存储新基建赛道。正如阿里云高级解决方案架构师所说，“<strong>在未来，云+连接+数据+Filecoin将是Web3.0的核心。</strong>”</p>

<p><img src="https://img.jinse.com/5400947_image3.png" alt="5400947_image3.png"></p>

<p><strong>Web1.0</strong></p>

<p>单向的，可读不可写，典型代表就是新浪、搜狐等门户网站，单向向网络传输信息，主要是展示的作用；</p>

<p><strong>Web2.0</strong></p>

<p>双向的，可以交互，典型代表就是微信、微博等，人人都可以创造内容，可以互动，但中间需要平台当收集和分发的中枢；</p>

<p><strong>Web3.0</strong></p>

<p>人人都是信息和数据的分发源和中转站，是点对点的网络传输方式，不存在第三方的介入，是互联网的一大跨步，可进行价值传输。</p>

<p><strong>而IPFS作为一个分布式点对点网络传输协议，刚好为Web3搭建了一个基础网络架构，为实现数据价值传输奠定了良好的基石。</strong></p>

<p><img src="https://img.jinse.com/5400948_image3.png" alt="5400948_image3.png"></p>

<p>无论是Web1.0还是Web2.0，因为运营服务的中心化总是或多或少地带来透明度和信任的问题，但是这一问题可以通过数据权益通证化、数据确权与授权的区块链技术应用来得到解决，这个过程完成之后，Web3.0时代也将来临。</p>

<p><strong>Web3.0的意义是使Web去中心化，而IPFS将成为HTTP的替代协议。</strong>IPFS去中心化存储、无法篡改、信息加密等特点将实现用户对数字身份和数据的自我控制，人们可以参与投票、参与激励，实现开发者与使用者的良性互动。Web3.0将打断巨头垄断局面，使互联网实现价值化、去中心化，人们的生活方式发生根本变化，所有互联网用户将不再受到现有资源积累的限制，具有更加平等地获得财富和声誉的机会。</p>
 
<p>来源：<a href="https://www.jinse.com/news/blockchain/1125228.html" target="_blank">金色财经</a></p></div>`
			}
		},
		onLoad() {  
		},
		onReachBottom() { 
		},
		methods: {
			bindTitle (e) {
				this.title = e.detail.value
			},
			bindTime (e) {
				this.time = e.detail.value
			},
			bindTextAreaBlur (e) {
				this.content = e.detail.value
			},
			handleSubmit() {  
				let that = this 
				uniCloud.callFunction({
					name: "addContent",
					data: {
						title: that.title,
						time: that.time,
						content: that.content
					},
					success(res) { 
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
