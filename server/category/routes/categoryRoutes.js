const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories, updateCategory } = require('../controllers/categoryController');

router.route('/').post(createCategory).get(getAllCategories);
router.put('/:id', updateCategory);

module.exports = router;
