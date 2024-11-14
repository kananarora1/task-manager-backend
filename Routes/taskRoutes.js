const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../Controllers/taskController');
const authenticateUser  = require('../Middlewares/auth');

router.post('/create', authenticateUser, createTask);

router.get('/', getAllTasks);

router.get('/:id', getTaskById);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
