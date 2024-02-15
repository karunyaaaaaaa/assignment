const express = require('express');
const { logRequest } = require('./middleware/commonMiddleware');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authroutes');
const blogRoutes = require('./routes/blogroutes');

const app = express();
const port = 3000;

// Built-in middleware for parsing JSON requests
app.use(express.json());

// Application-level middleware for common functionalities
app.use(logRequest);

// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

// Handle root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});