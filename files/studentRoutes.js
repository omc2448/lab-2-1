const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// GET /students         -> list all students
router.get('/', studentController.getAllStudents);

// GET /students/:id     -> get a single student
router.get('/:id', studentController.getStudentById);

// POST /students        -> create a new student
router.post('/', studentController.createStudent);

// PUT /students/:id     -> update an existing student
router.put('/:id', studentController.updateStudent);

// DELETE /students/:id  -> delete a student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
