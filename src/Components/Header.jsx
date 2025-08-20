import React from 'react'
import { Link } from 'react-router-dom'
import achieves from "../assets/achievers_logo.png"
import { MdAccountCircle } from "react-icons/md";
import { IoMdCart } from 'react-icons/io';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <img src={achieves} alt=""  ></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{paddingLeft: '800px'}}>
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
         <li className="nav-item">
          <Link to='/shop' className="nav-link active" aria-current="page" >Shop</Link>
        </li>
         <li className="nav-item">
          <Link to='/cart' className="nav-link active" aria-current="page" >Cart</Link>
          
        </li>
        <li className="nav-item" >
          <MdAccountCircle size={23}/>
          <IoMdCart size={23}/>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header