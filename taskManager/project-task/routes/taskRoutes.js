const express = require('express');
const taskController = require('../controllers/taskControllers')

const router = express.Router();

router.get('/', taskController.task_index_get);
router.post('/', taskController.task_create_post);
router.get('/:id', taskController.task_details_get);

module.exports = router;
