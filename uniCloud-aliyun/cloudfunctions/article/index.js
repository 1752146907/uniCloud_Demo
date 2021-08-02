'use strict';

exports.main = async (event, context) => {
	// 查
	const db = uniCloud.database();
	const collection = db.collection('article');
	// const articleData = await collection.get() 
	// 按数量查询
	let {page, limit} = event
	let skip = (page - 1) * limit 
	const articleData = await collection.skip(skip).limit(limit).get() 
	
	// 新增
	// const articleData = await collection.add({
	// 	title: event.title,
	// 	cover: event.cover
	// }) 
	
	// 删除
	// const articleData = await collection.doc("6104c4339c77390001114982").remove()

	// 改 
	// const articleData = await collection.doc("6104c43f2a138e000142ad88").update({
	// 	title: '浏览器默认样式统一，基础样式，网格，表格、表单、按钮及常用组件样式。',
	// 	cover: 'https://amazeui.shopxo.net/static/images/003.jpg'
	// })
	
	//返回数据给客户端
	return articleData
};
