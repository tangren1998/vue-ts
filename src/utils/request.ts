import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 1000,
})

export default instance
