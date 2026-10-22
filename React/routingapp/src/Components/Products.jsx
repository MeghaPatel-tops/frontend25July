import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Products() {
    const [products ,setProducts]=useState([]);
    const getProduct = async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            const productsArray = res.data;
            console.log(productsArray);
            setProducts(productsArray)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        console.log("gere");
        
        getProduct()
    },[])
    return (
        <div className='max-w-7xl '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12 py-20">


             {
                products && products.map((index,i)=>(
                       <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                    <img src={index.image}
                        className="w-full h-56 object-cover"
                        alt="Red sports shoe" />

                    <div className="p-5">
                        <p className="text-sm text-blue-600 font-semibold">Footwear</p>
                        <h3 className="text-xl font-bold mt-2">{index.title}</h3>
                       
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold">{index.price}</span>
                            <span className="text-gray-400 line-through">₹2,499</span>
                        </div>
                        <button 
                            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
                ))
             }






            </div>

        </div>
    )
}

export default Products