const Post = require('../models/postModel');

// @route POST /posts
const createPost = async (req, res) => {
    const { category, title, description } = req.body;
    // const { image } = req.files;

    (!category || !title || !description) ? (
        res.status(400).json({ message: `all fields are required` })
    ) : null;

    image.mv(__dirname + '../upload/' + image.name);

    const post = await Post.create({
        category: category,
        title: title,
        description: description,
        // image: image.name,
    });

    res.status(200).json(post);
}

// @route GET /posts
const getAllPosts = async (req, res) => {
    const posts = await Post.find();

    res.status(200).json(posts);
}

// @route GET /posts/:id
const getOnePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    (!post) ? res.status(404).json({ message: `this post not found` }) : null;

    res.status(200).json(post);
}

// @route PUT /posts/:id
const updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    (!post) ? res.status(404).json('this post not found') : null;

    const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(postUpdated);
}

module.exports = { createPost, getAllPosts, getOnePost, updatePost };