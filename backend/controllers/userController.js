const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// @desc Register a New user
//  @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
 const { name, email, password } = req.body;
 //  Validation
 if (!name || !email || !password) {
  res.status(400); // 400 = Bad Request

  throw new Error('Please enter all the fields'); // Adding error message
 }
 // Find if user already exists
 const userExists = await User.findOne({ email });
 if (userExists) {
  res.status(400);
  throw new Error('User already exists');
 }

 // Hash password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password, salt);

 // Create new user
 const user = await User.create({
  name,
  email,
  password: hashedPassword,
 });

 if (user) {
  res.status(201).json({
   //201= successful for create something
   _id: user._id,
   name: user.name,
   email: user.email,
   token: generateToken(user._id),
  });
 } else {
  res.status(400);
  throw new error('Invalid user data');
 }
});

// @desc Login a New user
//  @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
 const { email, password } = req.body;
 const user = await User.findOne({ email });
 //  Check if user and the password match
 if (user && (await bcrypt.compare(password, user.password))) {
  res.status(200).json({
   _id: user._id,
   name: user.name,
   email: user.email,
   token: generateToken(user._id),
  });
 } else {
  res.status(401);
  throw new Error('Invalid credentials');
 }
});

// @desc Get Current User
//  @route /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
 res.send('me');
});

// Generate TOKEN

const generateToken = (id) => {
 return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = {
 registerUser,
 loginUser,
 getMe,
};
