// Create web server
// Start server
// Create a route for /comments
// Send back a response with a JSON object
// Create a route for /comments/new
// Create a route for /comments/:id
// Create a route for /comments/:id/edit
// Create a route for /comments/:id/delete
// Create a route for /comments/:id/upvote
// Create a route for /comments/:id/downvote

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const comments = [
  {
    id: 1,
    username: 'tickle122',
    comment: 'LOL that is so funny',
    upvotes: 7
  },
  {
    id: 2,
    username: 'grumpy19',
    comment: 'I am a disagreeable bear.',
    upvotes: 16
  },
  {
    id: 3,
    username: 'chickenFan21',
    comment: 'This is prime content.',
    upvotes: 3
  }
];

app.use(express.static('public'));

app.get('/comments', (req, res, next) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});