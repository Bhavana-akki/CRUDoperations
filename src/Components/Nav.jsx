
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='div'>
      <div>
        <img src='https://alcoline.ph/wp-content/uploads/2019/08/imageedit_13_7736940800-1024x1020.png'/>
      </div>
      <div>
        <Link to={"/"}> <span>PRODUCTS</span> </Link>
      </div>
      <div>
      <Link to={"/cart"}> <span>CART</span> </Link>
      </div>
    </div>
  )
}

export default Nav


