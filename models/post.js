var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
	postID: Number,
	postContent: String,
	postAuthor: Number,
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	isPublished: {type: Boolean, default: false}

});

mongoose.model('Post',postSchema);