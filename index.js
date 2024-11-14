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

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Information',
        },
    },
    apis: ['./Routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(`/${process.env.swagger_endpoint}`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));
