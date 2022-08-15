import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://dogbreed-api.q9.com.br',
    headers: {
        'content-type': 'application/json'
    }
})

// api.interceptors.request.use (async config => {
//     const token = response.user.token
//     config.headers.Authorization = `Bearer ${token}`
// })