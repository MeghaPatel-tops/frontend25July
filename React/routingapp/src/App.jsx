import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { NavLink, Route, Routes } from 'react-router-dom'
import Dashbord from './Components/Dashbord'
import About from './Components/About'
import Services from './Components/Services'
import Fruits from './Components/Fruits'
import Products from './Components/products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <ul className='flex gap-5 bg-gray-900 text-white px-12 py-5'>
          <li>
             <NavLink to={'/'}>Dashbord</NavLink>
          </li>
          <li>
             <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
             <NavLink to={'/services'}>Services</NavLink>
          </li>
          <li>
             <NavLink to={'/fruits'}>Fruits</NavLink>
          </li>
          <li>
             <NavLink to={'/product'}>Products</NavLink>
          </li>
       </ul>

       <Routes>
           <Route path='/' element={<Dashbord/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/fruits' element={<Fruits/>}></Route>
           <Route path='/product' element={<Products/>}></Route>
       </Routes>
    </>
  )
}

export default App
