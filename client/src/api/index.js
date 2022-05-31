import axios from "axios"

const url = "http://localhost:5000/"

export const data = () => {
    return axios.get(`${url}`)
}

export const send = (data) => {
    return axios.post(`${url}send`, data)
}

export const del = (dataId) => {
    return axios.delete(`${url}remove`,dataId)
}