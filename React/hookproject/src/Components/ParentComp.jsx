import React, { useContext } from 'react'
import ChildComp from './ChildComp'
import { ThemeContext } from '../Context/ThemeContext'

function ParentComp() {
    const {theme,setTheme}= useContext(ThemeContext)
  return (
    <div style={{
          backgroundColor:theme=="light"?'white':'black'
    }}>
            <h2 style={{
               color: theme == 'light' ? 'black':'white',
               
            }}>Parent comp called</h2>
            <ChildComp />
    </div>
  )
}

export default ParentComp