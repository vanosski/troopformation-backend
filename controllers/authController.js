const User = require('../models/usermodel'); // Ensure this path is correct
const bcrypt = require('bcryptjs');

// Register user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body; // Destructure the fields from the request body

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            username,
            email, // Include email in the user document
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error); // Log error to console for debugging
        res.status(500).json({ error: 'Server error' });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { username, password } = req.body; // Destructure the fields from the request body

    try {
        // Check for user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Optionally, generate a token (JWT) here if you want to implement authentication
        // const token = generateToken(user); // Implement this function as needed
        res.status(200).json({ message: 'Login successful' }); //, token }); // Uncomment to send token
    } catch (error) {
        console.error(error); // Log error to console for debugging
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
