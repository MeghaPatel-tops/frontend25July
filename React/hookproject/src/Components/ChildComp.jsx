import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';


function ChildComp() {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log("in child",theme);
    
  return (
   <div style={{
          backgroundColor:theme=="light"?'white':'black'
    }}>
            <h3 style={{
               color: theme == 'light' ? 'black':'white',
               
            }}>Child comp called</h3>
            <button onClick={()=>{
                setTheme(theme=="light"?'dark':'light')
            }}>Change Theme</button>
    </div>
  )
}

export default ChildComp