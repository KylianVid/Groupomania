const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type : String, required: true},
    dateCreate: {type: Date, required: true},
    description: {type : String, required: true},
    imageUrl: {type : String, required: true},
    like: {type: Number},
    userLiked: { type: Array}
})

module.exports = mongoose.model('Post', postSchema);