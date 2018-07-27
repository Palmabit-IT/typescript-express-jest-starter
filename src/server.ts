import express from "express"
import helmet from 'helmet'

const app = express()

// It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
app.use(helmet())

app.listen(8000, () => console.log("Server running on 8000!!!"))

app.get("/", (req, res) => {
  res.send("Awesome! We're live debugging this!")
})