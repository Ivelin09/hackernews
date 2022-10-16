const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const STATUS = {
    add_friend: 0,
    requested: 1,
    pending: 2,
    friends: 3
};

const friendsSchema = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'Users'},
    recipient: { type: Schema.Types.ObjectId, ref: 'Users'},
    status: {
        type: Number,
        enums: [
            STATUS.add_friend,
            STATUS.requested,
            STATUS.pending,
            STATUS.friends
        ]
    }
});

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'Friends' }]
});

const comment = new Schema({
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    },
    subComment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
})

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'Users'
    }
})

const User = mongoose.model('Users', userSchema);
const Friend = mongoose.model('Friends', friendsSchema);
const Comment = mongoose.model('Comment', comment);
const Blogs = mongoose.model('Blog', blogSchema);

module.exports = { User, Comment, Friend, Blogs, STATUS };