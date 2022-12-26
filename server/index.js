const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
// const fileUpload = require('express-fileupload');

connectDB();

// Init App
const app = express();

var corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

app.use(express.json());

// Use the express-fileupload middleware
// app.use(fileUpload({
//     limits: {
//         fileSize: 10000000, // Around 10MB
//     },
//     abortOnLimit: true,
// }));

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

// Set Port, Listen For Requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });