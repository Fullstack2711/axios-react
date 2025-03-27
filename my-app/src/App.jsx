import { useState } from 'react'
import './App.css'
import ProductCard from './components/nav/nav'
import Card from './components/card/card'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Card/>
      <ProductCard />
    </div>


  )
}

export default App
