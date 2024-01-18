import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './../helpers/axiosinstance';
import { toast } from 'react-toastify';

const Product = () => {
    let[pname, setPname] = useState("")
    let[pprice, setPprice] = useState("")
    let[pqty, setPqty] = useState("")
    let navigate = useNavigate()
    let handleSubmit=(e)=>
    {
        e.preventDefault();
        let payload={
            pname,
            pprice,
            pqty
        }
        
        axiosInstance.post("/posts", payload)
        toast.success(`${payload.pname} added successfully`)
        navigate("/cart")
        
    }
  return (
    <div className='div1'>
      <form style={{textAlign:'center', width:1000}}>
        <fieldset>
            <u> <legend>WELCOME</legend> <br/> </u>
            <label htmlFor='pname'>PRODUCT NAME: </label>
            <input type='text' id='pname' style={{border:"2px solid black", "border-radius":20, "backgroundColor":"burlywood"}} placeholder='Enter the product name' onChange={(e)=>
            setPname(e.target.value)}></input> <br/> <br/> <br/>
            <label htmlFor='pprice'>PRODUCT PRICE: </label>
            <input type='number' id='pprice' style={{border:"2px solid black", "border-radius":20, "backgroundColor":"burlywood"}} placeholder='Enter the price' onChange={(e)=>
            setPprice(e.target.value)}></input> <br/> <br/> <br/>
            <label htmlFor='pqty'>PRODUCT QUANTITY: </label>
            <input type='number' id='pqty' style={{border:"2px solid black", "border-radius":20, "backgroundColor":"burlywood"}} placeholder='Enter the product quantity' onChange={(e)=>
            setPqty(e.target.value)}></input> <br/> <br/>

            <button onClick={handleSubmit}>SUBMIT</button>  <br/> <br/>
        </fieldset>
      </form>
    </div>
  )
}

export default Product



