// 1. import any needed libraries
const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
    .post('/create', async (req, res) => {
        try {
            const post = await Post.create(req.body.username, req.body.post);
            res.send({...post, username});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/update', async (req, res) => {
        try{
            const post = await Post.updatePost(req.body.username, req.body.postContent, req.body.postId);
            res.send({...post, postContent, postId: undefined})
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .get('/get', async (req, res) => {
        try{
            const post = await Post.getPost(req.body.postId);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async (req, res) => {
        try{
            await Post.deletePost(req.body.username, req.body.postId);
            res.send({success: "Post deleted."});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    module.exports = router;