const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./Routes/taskRoutes');
const userRoutes = require('./Routes/userRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL, {
    serverSelectionTimeoutMS: 5000,
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

