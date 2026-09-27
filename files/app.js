const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount the students router under /students
app.use('/students', studentRoutes);

// Basic 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
