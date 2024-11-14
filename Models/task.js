const mongoose = require('mongoose');
const User = require('./user');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      status: {
        type: String,
        enum: ['Todo', 'In Progress', 'Done'],
        default: 'Todo',
      },
      priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
      },
      dueDate: {
        type: Date,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }
});