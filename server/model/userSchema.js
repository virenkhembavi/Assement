import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    url: String,
    content: String,
    author: String,
})

const pattern = mongoose.model("userData", userSchema)

export default pattern