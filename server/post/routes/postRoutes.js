const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getOnePost, updatePost } = require('../controllers/postController');
const upload = require('../middlewares/upload');

// router.route('/').post(createPost).get(getAllPosts);

router.post('/', upload.single('image'), createPost);

router.get('/', getAllPosts);

router.get('/:id', getOnePost);

router.put('/:id', updatePost);


module.exports = router;