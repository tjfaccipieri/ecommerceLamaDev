import axios from "axios"
import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

export const useFetch =  (url: string) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () =>{
      try {
        setLoading(true)
        const res = await makeRequest.get(url)
        setData(res.data.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  },[url])

  return {data, loading, error}
}