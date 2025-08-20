import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Shop from '../Components/Shop'
import Cart from '../Components/Cart'
import ProductDetail from '../Components/ProductDetail'


export class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path='/home/:id' element={<ProductDetail/>}/>
        <Route path='/pDetail/:id' element={<Cart/>}/>
        
      
      </Routes>
    )
  }
}

export default Routing