import React, { useMemo, useState } from 'react'

function Fruits() {
    const fruits = [
        "Apple",
        "Banana",
        "Mango",
        "Orange",
        "Grapes",
        "Pineapple",
        "Watermelon",
        "Papaya",
        "Strawberry",
        "Blueberry",
        "Kiwi",
        "Guava",
        "Pomegranate",
        "Peach",
        "Pear",
        "Cherry",
        "Lemon",
        "Coconut",
        "Lychee",
        "Dragon Fruit"
    ];
    const [txt,setTxt]=useState("");

   const FilterFruits = useMemo(()=>{
       let newFruits =[];
       if(txt==""){
            newFruits=fruits;
       }
       else{
            newFruits= fruits.filter((index)=>{
                  if(index.toLowerCase().startsWith(txt.toLowerCase())){
                      return index
                  }
            })
          
       }
         return newFruits;
   },[txt]);

   console.log(FilterFruits);
   


    return (
        <div>
            <fieldset>
                <input type="text" name="" id="" onChange={(e)=>{
                    setTxt(e.target.value)
                }} />
            </fieldset>
            <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "15px"
        }}>
                {
                    FilterFruits.map((fruit) => (
                        <li
                            key={fruit}
                            style={{
                                backgroundColor: "white",
                                padding: "18px 12px",
                                borderRadius: "10px",
                                textAlign: "center",
                                color: "#166534",
                                fontSize: "16px",
                                fontWeight: "bold",
                                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                                border: "1px solid #bbf7d0",
                                cursor: "pointer"
                            }}
                        >
                             {fruit}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Fruits