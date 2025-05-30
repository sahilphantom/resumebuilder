const User = require("../models/User"); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 

// Generate JWT Token 
const generateToken = (userId) => { 
return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" }); 
};

// @desc Register a new user 
// @route POST/api/auth/register 
//@access Public 
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Registering user:", req.body);

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    //   profileImageUrl,
    });

    // Generate token
    const token = generateToken(user._id);
    console.log("User registered successfully:", user);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
        // profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Login user 
// @route POST/api/auth/login 
// @access Public 
const loginUser = async (req, res) =>{

   try {
    const { email, password } = req.body;
    console.log("Logging in user:", req.body);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // return user data and token
     res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
        // profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
      } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

// @desc Get user profile 
// @route GET /api/auth/profile 
// @access Private (Requires JWT) 
const getUserProfile = async (req, res) => { 
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
      } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }}

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};