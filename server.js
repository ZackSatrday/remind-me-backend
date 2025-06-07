import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// post remainder date, time, message, type(sms/email)
app.post('/api/reminder', (req, res) => {
    const {date, time, message, method} = req.body

    if(!date || !time || !message || !method){
        return res.status(400)
    }
    // here we can add it to a database
    console.log("New Reminder")
    console.log(`Date: ${date}\nTime:${time}\nMessage:${message}\nMethod:${method}`)

    res.json({
        status : "success"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})