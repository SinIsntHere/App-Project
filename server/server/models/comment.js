// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const commentSchema = new mongoose.Schema({
    username: { type: String, required: true},
    post_id: { type: String, required: true},
    comment_id: { type: String, required: true, unique: true},
    content: { type: String, required: true}
})

// 3. create model of schema
const Comment = mongoose.model('Comment', commentSchema);

// 4. create CRUD functions on model
// create a comment
async function createComment(data) {
    const comment = new Comment(data);
    return await comment.save();
}
// read a comment
async function getCommentById(comment_id) {
    return await Comment.findOne({ comment_id });
}
// update a comment
async function updateCommentContent(comment_id, newContent) {
    return await Comment.findOneAndUpdate(
        { comment_id },
        { content: newContent },
        { new: true });
}
// delete a comment
async function deleteComment(comment_id) {
    return await Comment.findOneAndDelete({ comment_id });
}

// 5. export all functions we want to access in route files
module.exports = {createComment, getCommentById, updateCommentContent, deleteComment};
