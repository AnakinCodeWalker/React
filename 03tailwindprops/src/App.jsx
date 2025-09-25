
import './App.css'
import Card from './components/card'
import Details from './components/Details'
import Items from './components/Items'
/*
https://youtu.be/qkbijl5EoHc?si=yTF7q0Fxcz2vThF0 
installation guide  of tailwind css
*/
function App() {
let name = 'prince'

const response = [
  {
    "name": "Alice",
    "age": 25
  },

  {
    "name": "Bob",
    "age": 30
  },
  {
    "name": "Charlie",
    "age": 22
  }
  
]

  return (
    <div>
     
       <Card id='12'/>
        <Details name={name}/> 
          setting up the tailwind css
          {/* passing the response object. */}
<Items response={response}/>
    </div>
  )
}

export default App
