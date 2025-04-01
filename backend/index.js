// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const { getResponse } = require('./chat');

// Initialize Express app
const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(cors());
server.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Define route for the home page (temporal, just like in your Flask app)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Define route for the chatbot response
server.post('/predict', (req, res) => {
  const text = req.body.message;
  const response = getResponse(text);
  const message = { answer: response };
  res.json(message);
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});