const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI || 'mongodb://mongodb-service:27017/testdb')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Kubernetes Web App Running Successfully');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
