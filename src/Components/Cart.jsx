import React, { useEffect, useState } from 'react'


const Cart = () => {

  const [userData,setUserData]= useState([])
  useEffect(()=>{
  
    fetchData()
  },[])
const fetchData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const da = await res.json()

  setUserData(da)
  console.log(da);
  
}

  return (
    <div>
        <h2>Cart</h2>

        {
          userData && userData.map((e)=>(
            <p key={e.id}>{e.name}</p>
          ))
        }


    </div>
  )
}

export default Cart