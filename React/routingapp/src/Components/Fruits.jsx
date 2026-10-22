import React, { useState } from 'react'

function Fruits() {
    const [fruits, setFruist] = useState([]);
    const [fname, setFname] = useState("");
    const [edit,setEdit]=useState(null)

    const editData = (id)=>{
        setFname(fruits[id]);
        setEdit(id)
    }



    const handleClick = (e) => {
        e.preventDefault();
        console.log(fname);
        if(edit==null){
            setFruist([
            ...fruits,
            fname
        ])
        
        }
        else{
            fruits[edit]=fname;
            setFruist(fruits);
            setEdit(null)
        }
        setFname("")

    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Add Fruit
                </h1>

                <p className="text-gray-500 mb-6">
                    Enter your favorite fruit name.
                </p>

                <form>
                    <label for="fruitname"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Fruit Name
                    </label>

                    <input
                        type="text"
                        id="fruitname"
                        name="fruitname"
                        value={fname}
                        placeholder="Enter fruit name"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-green-500
                       focus:border-green-500 mb-4"
                        onChange={(e) => {
                            setFname(e.target.value)
                        }}
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-3
                       rounded-lg hover:bg-green-700 transition duration-300" onClick={handleClick}>
                        + Add Fruit
                    </button>
                </form>
            </div>

              <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-5">
                Fruit List
            </h1>

            <ul className="space-y-3">

              {
                fruits && fruits.map((item,i)=>(
                      <li key={i} className="bg-green-50 p-4 rounded-lg border border-green-200
                       flex items-center justify-between">
                    <span className="text-gray-800 font-medium">{item}</span>
                    <button className="px-2 py-1  bg-red-200 mx-2"onClick={()=>{
                      
                        const filterArray = fruits.filter((index,id)=>id != i);
                        
                        setFruist(filterArray)
                        
                    }}>X</button>
                    <button  onClick={()=>{
                            editData(i)
                    }} className='px-2 py-1 bg-green-300'>Edit</button>
                    
                </li>
                ))
              }

              

            </ul>
        </div>
    </div >
  )
}

export default Fruits