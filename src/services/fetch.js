import { getRandomInt } from '../utils/getRandomInt'

export const fetchRandomFact = (url, handleFact) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const fact = data?.data[getRandomInt(0, 10)]?.fact?.split(' ')[0]
      handleFact(fact)
    })
}

export const fetchCatFact = (url, fact, handleCat) => {
  fetch(`${url}${fact}`)
    .then((res) => res.json())
    .then((data) => {
      const cat = data?.config?.url
      handleCat(cat)
    })
}
