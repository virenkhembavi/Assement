import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { send, del } from '../../api/index'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Index(data) {
    const [formData, setFormData] = useState({
        url: "",
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
        const response = await send(formData)
        console.log(response.status)
    }
    const deleteUser = async (userID) => {
        console.log(userID)
        await axios.delete("http://localhost:5000/remove", userID)
    }

    return (
        <div>
            <form style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "10px" }} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" name="url" value={formData.url} onChange={handleChange} label="PROFILE PICTURE" variant="outlined" />
                <TextField id="outlined-basic" name="content" value={formData.content} onChange={handleChange} label="CONTENT" variant="outlined" />
                <TextField id="outlined-basic" name="author" value={formData.author} onChange={handleChange} label="AUTHOR" variant="outlined" />
                <Button type="submit">SUBMIT</Button>
            </form>
            {data.data?.map((item) => {
                return (
                    <Card key={item._id} sx={{ minWidth: 575 }} style={{ marginBottom: "10px" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <img src={item.url} alt="pp" width="50px" height="50px" style={{ borderRadius: "25px" }} />
                            </Typography>
                            <Typography variant="h5" component="div">

                                {
                                    `${item.content}`
                                }
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {
                                    `${item.author}`
                                }
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <Button onClick={() => deleteUser(item._id)}>Delete</Button>
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <Link to={`/edit/${item._id}`} >
                                    <Button >Update</Button>
                                </Link>
                            </Typography>

                        </CardContent>
                    </Card>
                )
            })}
        </div >
    )
}
