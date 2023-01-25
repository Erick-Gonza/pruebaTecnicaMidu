// https://catfact.ninja/facts
// https://cataas.com/cat/says/hello

import CatContext from './context/CatContext'
import Card from './components/Card/Card'

const App = () => {
  return (
    <CatContext>
      <Card />
    </CatContext>
  )
}

export default App
