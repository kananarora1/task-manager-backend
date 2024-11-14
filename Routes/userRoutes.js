const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../Controllers/userController');

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user by providing name, password, and other details.
 *     operationId: registerUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin, user]
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Bad request (invalid input data)
 *       500:
 *         description: Internal server error
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User login
 *     description: Logs in an existing user by verifying credentials and returns a JWT token.
 *     operationId: loginUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Login successful, returns a JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Fetches a list of all users in the system. Requires admin privileges.
 *     operationId: getAllUsers
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *       403:
 *         description: Unauthorized access (admin required)
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllUsers);

module.exports = router;
