import { useState } from 'react'
import './App.css'

function App() {
 const [counter, setfirst] = useState(0)

  let change=()=>{
setfirst(counter+1)
  }

  
  let decrease=()=>{
setfirst(counter-1)
  }
  return (
    <>
    <h1>counter value is {counter}</h1>
   <button onClick={change}>incerement</button>
   <button onClick={decrease}>decrement</button>
    </>
  )
}

export default App
