const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', todoSchema);
module.exports = Task;
