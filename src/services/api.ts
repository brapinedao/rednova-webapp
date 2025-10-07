import axios from 'axios'

const api = axios.create({
  baseURL: 'www.google.com',
  timeout: 10000,
})

export default api
