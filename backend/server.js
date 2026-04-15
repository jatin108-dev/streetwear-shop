// npm install express mongoose cors dotenv cookie-parser
// npm install express cors cookie-parser jsonwebtoken bcryptjs

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes')
const connectDB = require("./config/db");

// middleware
const app = express()
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
  origin: "http://localhost:5173", // frontend URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // will accept cookies from frontend
};

app.use(cors(corsOptions))

// ROUTES
app.use("/api", authRoutes);

connectDB()

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
