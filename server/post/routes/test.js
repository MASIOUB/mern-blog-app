const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const app = express();
const { createPost, getAllPosts, getOnePost, updatePost } = require('../controllers/postController');
// const upload = require('../middlewares/upload');
// router.route('/').post(createPost).get(getAllPosts);

router.post('/', createPost); 

router.get('/', getAllPosts);

router.get('/:id', getOnePost);

router.put('/:id', updatePost); 
app.use(fileUpload)
router.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/public/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/public/${file.name}` });
    });
  });

module.exports = router;