const express = require('express');
const router = express.Router();

// GET
router.get('/get', (req, res) => {
  res.send('Hello World!');
});

// POST
router.post('/', (req, res) => {
  res.send('Created item');
});

// PUT
router.put('/:id', (req, res) => {
  res.send(`Updated item with id: ${req.params.id}`);
});

// DELETE
router.delete('/:id', (req, res) => {
  res.send(`Deleted item with id: ${req.params.id}`);
});

module.exports = router;
