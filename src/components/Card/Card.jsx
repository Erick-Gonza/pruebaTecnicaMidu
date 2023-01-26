import { useContext } from 'react'
import { catFactContext } from '../../context/CatContext'
import RefreshFact from '../RefreshButton/RefreshFact'
import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'

const Card = () => {
  const { fact, cat, handleNewFact } = useContext(catFactContext)

  return (
    <div className="flex flex-col items-center py-4 px-2">
      <TextContainer fact={fact} />
      <ImageContainer cat={cat} />
      <RefreshFact handleNewFact={handleNewFact} />
    </div>
  )
}

export default Card
