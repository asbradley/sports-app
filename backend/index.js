const express = require('express');
const app = express();
const PORT = 6500;

const db = require('./db')

app.use(express.json());

app.get('/api/test', (req, res) => {
  db.query('SELECT * FROM test_connection', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

