import { createContext, useEffect, useState } from 'react'
import { fetchCatFact, fetchRandomFact } from '../services/fetch'

export const catFactContext = createContext()
const { Provider } = catFactContext

const CatContext = ({ children }) => {
  const [fact, setFact] = useState()
  const [cat, setCat] = useState()

  const baseUrlFact = 'https://catfact.ninja/facts'
  const baseUrlCat = 'https://cataas.com/cat/says/'

  const handleFact = (fact) => {
    setFact(fact)
  }

  const handleCat = (cat) => {
    setCat(cat)
  }

  useEffect(() => {
    fetchRandomFact(baseUrlFact, handleFact)
  }, [])

  useEffect(() => {
    !fact && fetchCatFact(baseUrlCat, fact, handleCat)
    console.log(fact)
    console.log(cat)
  }, [fact])

  const catContextData = {
    fact,
    cat
  }

  return <Provider value={catContextData}>{children}</Provider>
}

export default CatContext
