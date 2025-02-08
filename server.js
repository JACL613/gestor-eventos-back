const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
morgan = require("morgan")
dotenv.config()



const app = express()

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))

// Routes
const authRoutes = require("./routes/auth")
const eventRoutes = require("./routes/events")

app.use("/api/auth", authRoutes)
app.use("/api/events", eventRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

