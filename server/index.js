import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Routes from "./controller/index.js"

const app = express()
const port = 5000
const URI = "mongodb+srv://mernproject:happy31@cluster0.2gvdu.mongodb.net/AssementSchema?retryWrites=true&w=majority"

app.use(cors())
app.use(express.json())

mongoose.connect(URI, () => console.log("DATABASE CONNECTED"))

app.use("/", Routes)


app.get("/", async (req, res) => {
    res.send("WE GOT RESPONSE")
})


app.listen(port || 5000, () => console.log(`server started on : ${port}`))