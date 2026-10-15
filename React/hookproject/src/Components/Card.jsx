import React, { useEffect, useRef } from 'react'

function Card() {
    const inputRef= useRef();
    const countRef= useRef(0)

    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div>
        
        <fieldset>
            <label htmlFor=""></label>
            <input type="text" name="" id="" ref={inputRef} />
            <br />
            <button onClick={()=>{
                countRef.current = countRef.current+1;
                console.log(countRef.current);
                
            }}>Click Me</button>
            <br />
            <span>{countRef.current}</span>
        </fieldset>
    </div>
  )
}

export default Card