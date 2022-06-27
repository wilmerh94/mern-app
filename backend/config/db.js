// Database connection files
const mongoose = require('mongoose');

const connectDB = async () => {
 try {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline); //cyan.underline is the package colors added on the server file
 } catch (error) {
  console.log(`Error: ${error.message}`.red.underline.bold);
  process.exit(1);
 }
};

module.exports = connectDB;
