const express = require('express');
const router = express.Router();
const adminAuth = require('../Middlewares/adminAuth');
const { getAllUsers, deleteTaskById } = require('../Controllers/adminController');

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users (Admin only)
 *     description: Retrieves a list of all users in the system.
 *     responses:
 *       200:
 *         description: A list of users.
 *       403:
 *         description: Access denied. Admins only.
 *       500:
 *        description: Server error.
 */
router.get('/users', adminAuth, getAllUsers);

/** 
* @swagger
* /api/admin/tasks/{id}:
*   delete:
*     summary: Delete a task by ID (Admin only)
*     description: Deletes a specific task by its ID.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         description: The ID of the task to delete
*     responses:
*       200:
*         description: Task deleted successfully.
*       404:
*         description: Task not found.
*       403:
*         description: Access denied. Admins only.
*       500:
*         description: Server error.
*/

router.delete('/tasks/:id', adminAuth, deleteTaskById);

module.exports = router;
