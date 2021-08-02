'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数 
	const db = uniCloud.database();
	const collection = db.collection('content'); 
	const articleData = await collection.doc(event.id).get()
	
	//返回数据给客户端
	return articleData
};
