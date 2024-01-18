import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './../helpers/axiosinstance';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Update = () => {
    let[pname, setPname] = useState("")
    let[pprice, setPprice] = useState("")
    let[pqty, setPqty] = useState("")
    let navigate = useNavigate()
    let {id}= useParams();

    useEffect(()=>
    {
        let fetchData = async ()=>{
            let {data}= await axiosInstance.get('/posts/${id}')
            setPname(data.pname)
            setPprice(data.pprice)
            setPqty(data.pqty)
        }
        fetchData()
    })
    let handleSubmit=(e)=>
    {
        e.preventDefault();
        let payload={
            pname,
            pprice,
            pqty
        }
        
        axiosInstance.put(`/posts/${id}`, payload)
        toast.success(`${payload.pname} added successfully`)
        window.location.assign("/cart")
        
    }
  return (
    <div className='div1'>
      <form style={{textAlign:'center', width:1000}}>
        <fieldset>
            <u> <legend>Update a product</legend> <br/> </u>
            <label htmlFor='pname'>PRODUCT NAME: </label>
            <input type='text' id='pname' style={{border:"2px solid black", "border-radius":20, "backgroundColor":"burlywood"}} placeholder='Enter the product name' value={pname} onChange={(e)=>
            setPname(e.target.value)}></input> <br/> <br/> <br/>
            <label htmlFor='pprice'>PRODUCT PRICE: </label>
            <input type='number' id='pprice' style={{border:"2px solid black", "border-radius":20, "backgroundColor":"burlywood"}} placeholder='Enter the price' value={pprice} onChange={(e)=>
            setPprice(e.target.value)}></input> <br/> <br/> <br/>
            <label htmlFor='pqty'>PRODUCT QUANTITY: </label>
            <input type='number' id='pqty' style={{border:"2px solid black", "border-radius":20, "backgroundColor":"burlywood"}} placeholder='Enter the product quantity' value={pqty} onChange={(e)=>
            setPqty(e.target.value)}></input> <br/> <br/>

            <button onClick={handleSubmit}>UPDATE</button>  <br/> <br/>
        </fieldset>
      </form>
    </div>
  )
}

export default Update



