const Task = require('../Models/task'); 

// Create a new Task
exports.createTask = async (req, res) => {
    try {
        const taskData = {
            ...req.body,
            userId: req.user._id,
        };
        const newTask = new Task(taskData); 
        await newTask.save(); 
        res.send({
            success: true,
            message: 'Task created',
            taskId: newTask._id, 
        });
    } catch (error) {
        res.status(500).json({ message: "Not able to create task " + error });
    }
}

// Get all Tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).json({ message: "Not able to fetch tasks " + error });
    }
}

// Get a Task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.send(task);
    } catch (error) {
        res.status(500).json({ message: "Not able to fetch task " + error });
    }
}

// Update a Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.send({
            success: true,
            message: 'Task updated',
            taskId: task._id,
        });
    } catch (error) {
        res.status(500).json({ message: "Not able to update task " + error });
    }
}

// Delete a Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id); 
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.send({
            success: true,
            message: 'Task deleted',
            taskId: task._id,
        });
    } catch (error) {
        res.status(500).json({ message: "Not able to delete task " + error });
    }
}
