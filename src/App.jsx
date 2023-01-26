import { useContext } from 'react'
import { catFactContext } from './context/CatContext'

const App = () => {
  const { fact, cat } = useContext(catFactContext)
  return (
    <div className="flex flex-col items-center py-4 px-2">
      <section className="text-2xl font-bold">
        {fact ? <p>The fact is: {fact}</p> : <p>Loading fact...</p>}
      </section>

      <section className="w-full h-auto rounded-md">
        {cat ? <img src={cat} className="rounded-md" /> : <p>Loading cat...</p>}
      </section>
    </div>
  )
}

export default App
