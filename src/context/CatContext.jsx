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

  const handleNewFact = () => {
    fetchRandomFact(baseUrlFact, handleFact)
  }

  useEffect(() => {
    fetchRandomFact(baseUrlFact, handleFact)
  }, [])

  useEffect(() => {
    fact && fetchCatFact(baseUrlCat, fact, handleCat)
  }, [fact])

  const catContextData = {
    fact,
    cat,
    handleNewFact
  }

  return <Provider value={catContextData}>{children}</Provider>
}

export default CatContext
