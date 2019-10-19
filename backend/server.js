const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const connectDB = require('./db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//Init Middleware
app.use(express.json({extened: false}));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


//Define Route
 app.use('/api/users', require('./routes/api/users'));
 app.use('/api/auth', require('./routes/api/auth'));
 app.use('/api/profile', require('./routes/api/profile'));
 app.use('/api/posts', require('./routes/api/posts'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
