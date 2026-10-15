import React, { useCallback, useState } from 'react'

function CallbackComp() {
    const [count,setCount]=useState(0);

    console.log("here");
    

    const handleSubmit = useCallback(()=>{
        console.log("function created");
        
    },[])
  return (
    <div>CallbackComp
        <button onClick={()=>{
            setCount(count+1)
        }}>Count increse</button>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default CallbackComp