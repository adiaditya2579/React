import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";
function Products() {
  const [product, setproduct] = useState([]);
  const getproduct = () => {
    axios
      .get('/products')
      .then((res) => {
        // console.log(res);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    getproduct();
  },[])
  return (
    <div>
    <button
        onClick={getproduct}
        className="px-3 py-1 bg-red-400 rounded-full text-nowrap my-4"
      >
        get product
    </button>
      <ul>
        {product.length > 0 ? (
          product.map((p) => (
            
            <li key={p.id} className=" bg-red-200 p-4 w-1/2 mb-2 ">{p.title}</li>
          ))
        ):<h1>Loding...</h1>}
      </ul>
    </div>
  );
}

export default Products;
