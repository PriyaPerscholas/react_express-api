const express = require('express');
const router = express.Router();
const Todos = require('../models/todos')

//Index
router.get('/', (req, res) => {
       Todos.find({}, (err, foundTodos) => {
              res.json(foundTodos)
       })
});

//Create
router.post('/', (req, res) => {
       Todos.create(req.body, (err, createdTodos) => {
              res.json(createdTodos)
       })
})

//createupdate route
router.put('/:id', (req, res) => {
       Todos.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTodo) => {
              res.json(updatedTodo);
       })
})

router.get('/:id', (req, res) => {
       Todos.findById(req.params.id, (err, foundTodo) => {
              res.json(foundTodo);
       });
});

//delete
router.delete('/:id', (req, res) => {
       Todos.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
              res.json(deletedTodo);
       });
});

module.exports = router;