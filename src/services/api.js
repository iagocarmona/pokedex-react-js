import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL
const baseDbUrl = process.env.REACT_APP_BASE_DB_URL

const api = axios.create({
  baseURL: baseUrl,
})

export const apidb = axios.create({
  baseURL: baseDbUrl,
})

export default api
