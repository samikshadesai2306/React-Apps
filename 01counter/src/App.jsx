import {useState} from 'react'
import './App.css'

function App() {
  // let counter = 18
const [counter, setCounter] = useState(1)
  const addValue =()=>{
    if(counter < 20 ){
      setCounter( counter +1 )
      }
  }


  const removeValue =()=>{
    if(counter > 0){
    setCounter( counter -1 )
    }else{
      counter == 0
    }
 
  }

  return (
    <>
      <h1>Sam Our React</h1>
      <h2>Counter No:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
