require("dotenv").config(); 
const express = require("express"); 
const cors = require("cors"); 
const path = require("path"); 
const connectDB = require("./configure/db");
const authRoutes = require("./routes/authRoutes");
// const resumeRoutes = require("./routes/resumeRoutes"); // Uncomment when resume routes are implemented

const app = express(); 

// Middleware to handle CORS 
app.use( 
cors({ 
origin: process.env.CLIENT_URL || "*",
methods: ["GET", "POST", "PUT", "DELETE"], 
allowedHeaders: ["Content-Type", "Authorization"],
})
);

// Connect to MongoDB
connectDB();  


// Middleware to parse JSON requests// Middleware 
app.use(express.json()); 

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", resumeRoutes);


// Start Server 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
