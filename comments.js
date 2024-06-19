// Create web server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Create array to store comments
const comments = [
  {
    username: 'Todd',
    comment: 'Hello',
    date: new Date()
  },
  {
    username: 'Jane',
    comment: 'Hi, Todd!',
    date: new Date()
  }
];

// Use body-parser middleware
app.use(bodyParser.json());

// Create comments route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create comments POST route
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  const date = new Date();

  comments.push({ username, comment, date });
  res.json({ message: 'Comment added!' });
});

// Set up server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});