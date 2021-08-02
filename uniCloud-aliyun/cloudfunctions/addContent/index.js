'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database(); 
	const collection = db.collection('content'); 
	const articleData = await collection.add({
		title: event.title,
		time: event.time,
		content: event.content
	}) 
	
	//返回数据给客户端
	return event
};
