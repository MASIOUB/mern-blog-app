const Category = require('../models/categoryModel');

// @route POST /categories
const createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ message: 'Enter name of category'});
        // throw new Error('Enter name of category')
    };

    const category = await Category.create({
        name: name
    });

    res.status(200).json(category);
}

// @route GET /categories
const getAllCategories = async (req, res) => {
    const categories = await Category.find();

    res.status(200).json(categories);
}

// @route PUT /categories/:id
const updateCategory = async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (!category) {
        return res.status(404).json({ message: 'Category not found'});
        // throw new Error(`Category not found`)
    }

    const apdatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(apdatedCategory);
}

module.exports = {
    createCategory,
    getAllCategories,
    updateCategory
}