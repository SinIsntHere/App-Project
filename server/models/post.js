// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
    postcontent: { type: String},
    postlikes: { type: Number},
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// 4. create CRUD functions on model
// CREATE a post
async function create(username, post) {
    const user = await getUser(username);
    if(!user) {
        throw new Error('User not found');
    }
    const newPost = await Post.create({
        post: post,
        author: username
    });
    
    return newPost;
}
// EDIT a post
async function updatePost(username, postContent, postId) {
    const post = await Post.findById(postId);
    if(!post) {
        throw new Error('Post not found.');
    }
    if(post.author.toString() !== username) {
        throw new Error('Not authorized.');
    }
    post.postContent = postContent;
    await post.save();

    return post;
}
// RETRIEVE/Read a post
async function getPost(postId) {
    const post = await Post.findById(postId).populate('author');
    return post;
}

// DELETE a post
async function deletePost(username, postId) {
    const post = await Post.findById(postId);
    if(!post) {
        throw new Error('Post not found.');
    }
    if(post.author.toString() !== username) {
        throw new Error('Not authorized');
    }
    await post.remove();
    return post;
}

// utility functions
async function getUser(username) {
    return await User.findOne({"username": username});
}

// 5. export all functions we want to access in route files
module.exports = {create, updatePost, getPost, deletePost};