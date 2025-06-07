import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

dotenv.config()
// Serve static files (like index.html) from the current directory
app.use(express.static(__dirname))

// MongoDB Uri from database
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Mongo Connection Error : ", err))

// Schema
const reminderSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    }
})

const Reminder = mongoose.model('Reminder', reminderSchema)

// post remainder date, time, message, type(sms/email)
app.post('/api/reminder', async (req, res) => {
    const {date, time, message, method} = req.body

    if(!date || !time || !message || !method){
        return res.status(400)
    }

    // here we added it to a database
    try {
        const result = await Reminder.create({
            date,
            time,
            message,
            method
        })

        console.log("New Reminder => ", result)

        res.status(201).json({
            status : "success",
            data: result
        })
    } catch (err) {
        console.error("Error creating reminder:", err)
        res.status(500).json({ error: "Internal server error" })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})