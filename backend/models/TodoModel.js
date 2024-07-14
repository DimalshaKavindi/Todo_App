const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },

    description: {
        type : String,
    },

    dueDate : {
        type : Date,
        required : true
    },

    Status: {
        type: Boolean
    }
})

const TaskTodo = mongoose.model("Task", todoSchema);
module.exports =TaskTodo;