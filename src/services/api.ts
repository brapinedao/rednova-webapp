import axios from 'axios'

const api = axios.create({
  baseURL: 'https://devs-back.hosdenar.gov.co:3025/',
  timeout: 10000,
})

export default api
