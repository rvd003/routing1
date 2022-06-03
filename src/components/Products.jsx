import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchproducts=async ()=>{
     let r=await fetch("http://localhost:3001/products")
      let d=await r.json();
        setProducts(d)
        console.log(products);
      };
    
    fetchproducts();

  },[]);
  return (
    <div>
      Products:{" "}
    <div>
      {products.map((p)=>(
        <div key={p.id}>
          <Link to ={`/products/${p.id}`}>{p.name}</Link>
          </div>
      ))}
    </div>
    </div>
  );
};

export default Products