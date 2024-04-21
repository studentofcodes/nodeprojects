require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Task = require('./models/task')
const taskRoutes = require('./routes/taskRoutes')


const app = express()

// connect to mongodb & listen for requests
const dbURI = process.env.MDB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(process.env.PORT))
  .catch(err => console.log(err));

// view engine
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.locals = req.path;
  next();
})


// mongoose & mongo tests
app.get('/add-task', (req, res) => {
  const task = new Task({
    title: 'New task01',
    type: 'Test Task',
    priority: 1,
    deadline: '04/22/2024'

  })
  
  
  task.save()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
});

app.get('/', (req, res) => {
  res.redirect('/tasks')
})

// routes
app.use('/tasks', taskRoutes)
