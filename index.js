const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const formationRoutes = require('./routes/formationRoutes'); // Ensure this is correctly imported
const authRoutes = require('./routes/authRoutes'); // Import the auth routes

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // This replaces bodyParser


// Welcome route for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Troop Formation API! Use /api/formation/calculate to post data.');
});

// Routes
app.use('/api/formation', formationRoutes); // Ensure this matches
app.use('/api/auth', authRoutes); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
