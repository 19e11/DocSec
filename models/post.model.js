const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
     title: {
        type: String,
        required: true
    },
    description: String,

    fileUrl: {
        type: String,
        required: true
    },

    fileSize: {
        type: Number,
        required: true
    },

    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'prof',
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const postModel = mongoose.model('post', postSchema);
module.exports = postModel;