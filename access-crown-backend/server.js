const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log('Server running on port 5000'));
const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://akashakash86768:pCPiZddvO4V793NT@cluster0.8ywf2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'));