// In-memory data store (swap this out for a real database later)
let students = [
  { id: 1, name: 'Alice Johnson', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob Smith', age: 22, major: 'Mathematics' },
];
let nextId = 3;

function getAllStudents(req, res) {
  res.json(students);
}

function getStudentById(req, res) {
  const student = students.find((s) => s.id === Number(req.params.id));
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
}

function createStudent(req, res) {
  const { name, age, major } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newStudent = { id: nextId++, name, age, major };
  students.push(newStudent);
  res.status(201).json(newStudent);
}

function updateStudent(req, res) {
  const student = students.find((s) => s.id === Number(req.params.id));
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const { name, age, major } = req.body;
  if (name !== undefined) student.name = name;
  if (age !== undefined) student.age = age;
  if (major !== undefined) student.major = major;

  res.json(student);
}

function deleteStudent(req, res) {
  const index = students.findIndex((s) => s.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  students.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
