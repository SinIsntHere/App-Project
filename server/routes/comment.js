// 1. import any needed libraries
const express = require("express");
const Comment = require('../models/comment');
const router = express.Router();

// 2. create all routes
router
    .post('/comments', async (req, res) => {
        try {
            const comment = await Comment.createComment(req.body);
            res.send({comment});
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .get('/comments/:id', async (req, res) => {
        try {
            const comment = await getCommentById(req.body.id);
            if (!comment) {
                return res.status(401).send({message: "Comment not found."});
            }
            res.send({comment});
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/comments/:id', async (req, res) => {
        try {
            const comment = await updateCommentContent(req.body.id, req.body.content);
            if (!comment) {
                return res.status(401).send({message: "Comment not found."});
            }
            res.send({comment});
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/comments/:id', async (req, res) => {
        try {
            const comment = await deleteComment(req.body.id);
            if (!comment) {
                res.status(401).send({message: "Comment not found."});
            }
            res.send({ success: "Comment deleted successfully."});
        } catch (error) {
            res.status(401).send({message: error.message});
        }
    });

    // 3. export router for index.js
    module.exports = router;