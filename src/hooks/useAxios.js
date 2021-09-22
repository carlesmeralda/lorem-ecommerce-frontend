import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

export const useAxios = ({
  url,
  method = 'get',
  body = null,
  headers = null,
}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const sendRequest = () => {
      axios[method](url, headers, body)
        .then(res => {
          if (isMounted) {
            setData(res.data)
          }
        })
        .catch(err => {
          if (isMounted) {
            setError(err)
          }
        })
        .finally(() => {
          isMounted && setIsLoading(false)
        })
    }
    sendRequest()

    return () => (isMounted = false)
  }, [method, url, body, headers])

  return { data, error, isLoading }
}
