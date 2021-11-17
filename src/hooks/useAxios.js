import { useCallback } from 'react'
import axiosInstance from '../services/api'

const useAxios = () => {
  const useGet = useCallback(async (url) => {
    try {
      const response = await axiosInstance.get(url)
      console.log(response.data.results)
      return response.data.results
    } catch (error) {
      console.log(error)
    }
  }, [])
  return { useGet }
}
export default useAxios
