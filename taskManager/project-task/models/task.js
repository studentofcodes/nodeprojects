const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },

    deadline: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'New',
    }
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task