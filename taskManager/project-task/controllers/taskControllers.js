const Task = require('../models/task')

// tasks_index_get, task_details_get, tasks_index_post, tasks_index_delete, tasks_index_patch

const task_index_get = (req, res) => {
    Task.find().sort({ createdAt: -1})
        .then(result => {
            res.render('index', {tasks: result, title: 'All Tasks'})
        })
}

const task_create_post = (req, res) => {
    const task = new Task(req.body);
    task.save()
      .then(result => {
        res.redirect('/tasks');
      })
      .catch(err => {
        console.log(err);
      });
  }

const task_details_get = (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .then(result => {
        res.render('taskDetails', { task: result, title: 'Task Details' });
        })
        .catch(err => {
        console.log(err);
    res.render('404', { title: 'Task not found' });
    });
}

module.exports = {
    task_index_get,
    task_create_post,
    task_details_get
}