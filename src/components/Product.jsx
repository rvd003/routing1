import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Product = () => {
  const [product, setProduct] = useState({})

  const{id}=useParams();
  useEffect(()=>{
    if (id){
      fetch(`http://localhost:3001/products/${id}`)
      .then((r)=>r.json())
      .then((d)=>setProduct(d))
    }
  },[id])
  
  return (
    <div>Product ID:{id}
    <div>Name:{product.name}</div>
    <div>Price:{product.price}</div>
    </div>
  
  )
  
}

export default Product