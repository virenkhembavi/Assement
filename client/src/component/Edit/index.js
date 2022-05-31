import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Index() {
    let params = useParams()
    let nav = useNavigate()
    const [formData, setFormData] = useState({
        id: params.id,
        content: "",
        author: ""
    })
    const handleChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.put("http://localhost:5000/update", formData)
        if (response.status === 200) nav("/")
    }
    // console.log(params.id)
    return (
        <div>
            <form style={{ width: "100%", height: "60vh", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginBottom: "10px" }} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" name="content" value={formData.content} onChange={handleChange} label="CONTENT" variant="outlined" />
                <TextField id="outlined-basic" name="author" value={formData.author} onChange={handleChange} label="AUTHOR" variant="outlined" />
                <Button type="submit">SUBMIT</Button>
            </form>
        </div>
    )
}
