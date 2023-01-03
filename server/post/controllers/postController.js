const Post = require('../models/postModel');
const sharp = require('sharp');

// @route POST /posts
const createPost = async (req, res) => {
    const { category, title, description } = req.body;
    const { file } = req;

    (!category || !title || !description) ? (
        res.status(400).json({ message: `all fields are required` })
    ) : null;

    const imageName = `${Date.now()}-${file.originalname}`;
    await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(`./images/${imageName}`);

    const post = await Post.create({
        category: category,
        title: title,
        description: description,
        image: imageName,
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