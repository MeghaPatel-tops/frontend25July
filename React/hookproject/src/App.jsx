import { useContext, useState } from 'react'
import './App.css'
import Counterapp from './Components/Counterapp'
import InputComp from './Components/InputComp'
import Profile from './Components/Profile'
import Home from './Components/Home'
import Card from './Components/Card'
import Fruits from './Components/Fruits'
import ParentComp from './Components/ParentComp'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './Context/ThemeContext'
import CallbackComp from './Components/CallbackComp'

function App() {
  const [count, setCount] = useState(0)
  
  const {theme}=useContext(ThemeContext)

  return (
   
    <div  style={{
          backgroundColor:theme=="light"?'white':'black'
    }}>
   
           {/* <h1 style={{
               color: theme == 'light' ? 'black':'white',
               
            }}>Main  comp load</h1>
           <ParentComp /> */}
           <CallbackComp/>
      
     
    </div>
  )
}

export default App
