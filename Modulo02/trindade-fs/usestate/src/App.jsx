import { useState } from 'react'

import './App.css'

function App() {

  const [name, setName] = useState('')

  const [number, setNumber] = useState(1)

  //console.log(name)

  const changeNumber = () => {
    // Previous valeu
    setNumber((prevNumber) => prevNumber + 1)
  }

  return (
    <div className="App form-group">
      {/* <h2>Meu nome é: {name}</h2> */}
      <input className="form-control" type="text" value={name} onChange={(e => setName(e.target.value))}/>

      <div>
        <p>Seu nome é: {name}</p>
      </div>

      <div>
        <p>Numero: {number}</p>
        <button onClick={changeNumber}>Mudar número!</button>
      </div>

      
    </div>
  )
  
  
}

export default App
