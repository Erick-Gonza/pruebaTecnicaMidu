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
  const base = 'https://cataas.com'
  fetch(`${url}${fact}?json=true`)
    .then((res) => res.json())
    .then((data) => {
      const { url } = data
      handleCat(`${base}${url}`)
    })
}
