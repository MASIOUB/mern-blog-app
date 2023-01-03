const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const sharp = require('sharp');

const multer = require('multer');

connectDB();

// Init App
const app = express();

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Simple Route (Http Methods (Or Verbs))
app.get('/', (req, res) => {
  res.send('Welcome to your new application');
})

// user routes
app.use('/users', require('./user/routes/userRoutes'));

// category routes
app.use('/categories', require('./category/routes/categoryRoutes'));

// post routes
app.use('/posts', require('./post/routes/postRoutes'));

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload a valid image file'))
    }
    cb(undefined, true)
  }
})


app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    console.log(req.file);
    const imageName = `${Date.now()}-${req.file.originalname}`
    await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(__dirname + `./images/${imageName}`)
    res.status(201).send('Image uploaded succesfully')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

// Set Port, Listen For Requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });