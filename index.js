const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors);
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('Connected to MongoDB');
})

.catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

