const express = require('express');
const colors = require('colors');
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const dotenv = require('dotenv').config(); //Adding dotenv package to be able to read all the variables im adding to the config .env file
const PORT = process.env.PORT || 5000; // Adding the port number if the server can't connect to the env port it will try to do it with 5000
// Adding the port number if the server can't connect to the env port it will try to do it with 5000

// Connect to Database
connectDB();
const app = express();
// Adding this i can get data from the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Adding route to the main
app.get('/', (req, res) => {
 res.status(200).json({ message: 'Welcome to Support!' });
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));

// Adding Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
