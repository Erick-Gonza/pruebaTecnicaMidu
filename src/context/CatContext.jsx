import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { getRandomInt } from '../utils/getRandomInt'

export const catFactContext = createContext()
const { Provider } = catFactContext

const CatContext = ({ children }) => {
  const [fact, setFact] = useState('')
  const [cat, setCat] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const urlFact = 'https://catfact.ninja/facts'
  const urlCat = 'https://cataas.com/cat/says/'

  const handleFactChange = (data) => {
    setFact(data)
    setIsLoading(false)
  }

  useEffect(() => {
    axios
      .get(urlFact)
      .then((response) => response.data)
      .then((data) => data?.data[getRandomInt(0, 10)])
      .then((data) => handleFactChange(data?.fact?.split(' ')[0]))
  }, [])

  useEffect(() => {
    !isLoading &&
      axios
        .get(`${urlCat}${fact}`)
        .then((response) => setCat(response?.config?.url))
  }, [fact])

  const catContextData = {
    fact,
    cat
  }

  return <Provider value={catContextData}>{children}</Provider>
}

export default CatContext
