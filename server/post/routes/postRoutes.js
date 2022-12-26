const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getOnePost, updatePost } = require('../controllers/postController');

router.route('/').post(createPost).get(getAllPosts);

router.get('/:id', getOnePost);

router.put('/:id', updatePost);

module.exports = router;