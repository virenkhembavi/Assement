import pattern from "../model/userSchema.js"


export const data = async (req, res) => {
    try {
        const response = await pattern.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

export const passData = async (req, res) => {
    const response = await pattern(req.body)
    try {
        await response.save()
        res.send(response)
    } catch (err) {
        console.log(err)
    }
}

export const update = async (req, res) => {
    const { id } = req.body
    const { content, author } = req.body
    console.log(req.body)
    const response = { content, author }
    try {
        await pattern.findByIdAndUpdate({ _id: id }, response, { new: true })
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

export const deletes = async (req, res) => {
    const { id } = await req.body
    console.log(id)
    try {
        await pattern.findByIdAndRemove({ _id: id })
        res.send("ITEM DELETED")
    } catch (err) {
        console.log(err)
    }

}