const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../Controllers/taskController');
const authenticateUser  = require('../Middlewares/auth');

/**
 * @swagger
 * /api/tasks/create:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task by providing title, description, status, priority, due date, and the user.
 *     operationId: createTask
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Todo, In Progress, Done]
 *               priority:
 *                 type: string
 *                 enum: [Low, Medium, High]
 *               dueDate:
 *                 type: string
 *                 format: date
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Bad request (invalid input)
 *       500:
 *         description: Internal server error
 */
router.post('/create', authenticateUser, createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Fetches a list of all tasks.
 *     operationId: getAllTasks
 *     responses:
 *       200:
 *         description: A list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 *                   priority:
 *                     type: string
 *                   dueDate:
 *                     type: string
 *                     format: date
 *                   userId:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     description: Fetches a single task by its ID.
 *     operationId: getTaskById
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A task object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 status:
 *                   type: string
 *                 priority:
 *                   type: string
 *                 dueDate:
 *                   type: string
 *                   format: date
 *                 userId:
 *                   type: string
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getTaskById);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task
 *     description: Updates an existing task by its ID.
 *     operationId: updateTask
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Todo, In Progress, Done]
 *               priority:
 *                 type: string
 *                 enum: [Low, Medium, High]
 *               dueDate:
 *                 type: string
 *                 format: date
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       400:
 *         description: Bad request (invalid input)
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     description: Deletes a task by its ID.
 *     operationId: deleteTask
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteTask);

module.exports = router;
