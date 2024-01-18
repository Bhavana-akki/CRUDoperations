

import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosinstance'
const Cart = () => {
  let[productData, setProductData] = useState([])
  useEffect(() => {
    let fetchData=async () => {
      let {data} = await axiosInstance.get("/posts")
      setProductData(data);
    }
    fetchData()
  },[])
  return (
    <div className='main-block'>
      {productData.map((x)=>
      {
        return(
          <div className='box-item'>
            <img src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${x.pname}`} alt="avatar"/>
          <h2><u>PRODUCT NAME:</u> <span>{x.pname} </span></h2>
          <h2><u>PRODUCT PRICE:</u> <span>{x.pprice}</span></h2>
          <h2><u>PRODUCT QUANTITY:</u> <span>{x.pqty}</span></h2> <br/>
          <div className='btn-block'>
          <button style={{border: '2px solid black', 'border-radius':10}}>UPDATE</button>
          <button style={{border: '2px solid black', 'border-radius':10}}>DELETE</button>
        </div>
          </div>
         
        )
      })}
      
    </div>
  )
}

export default Cart
