import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchFactApi } from '../services/fetch'

const useCustomFetch = () => {
  const [data, setData] = useState({})
  const [url, setUrl] = useState({})

  const handleData = (data) => {
    setData(data)
  }

  useEffect(() => {
    const dataFromService = fetchFactApi(url)
  }, [data])

  return <div>useCustomFetch</div>
}

export default useCustomFetch
