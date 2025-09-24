
import './App.css'
import Card from './components/card'
import Details from './components/Details'
/*
https://youtu.be/qkbijl5EoHc?si=yTF7q0Fxcz2vThF0 
installation guide  of tailwind css
*/
function App() {
let name = 'prince'
  return (
    <div>
     
       <Card id='12'/>
        <Details name={name}/> 
          setting up the tailwind css

    </div>
  )
}

export default App
