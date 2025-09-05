import React, { useState } from 'react'
import { products } from './AllData';
import { FaStar } from 'react-icons/fa';

const Shop = () => {
  const [selectCategory, setSelectCategory] = useState("all");
  const [search, setSearch]= useState("")
  // Filtering logic
  // console.log(search);
  
  //  if(search.length==products.category){
    
  //  } 
  
  const filterProducts = products.filter((item)=>{
    const drop = selectCategory === "all" ||  item.category === selectCategory;

    const searchData =  item.category.toLowerCase().includes(search.toLowerCase());  

    return  searchData && drop

  })
   
  return (
    <div>
      <div className='d-flex justify-content-between  m-3'>
        
        {/* Dropdown */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By Category
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => setSelectCategory("all")}>All</button></li>
            <li><button className="dropdown-item" onClick={() => setSelectCategory("sofa")}>Sofa</button></li>
            <li><button className="dropdown-item" onClick={() => setSelectCategory("chair")}>Chair</button></li>
            <li><button className="dropdown-item" onClick={() =>setSelectCategory("watch")}>Watch</button></li>
            <li><button className="dropdown-item" onClick={() => setSelectCategory("mobile")}>Mobile</button></li>
            <li><button className="dropdown-item" onClick={()=> setSelectCategory("wireless")}>Wireless</button></li>
          </ul>
        </div>

    
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      {/* Products */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { 
          filterProducts.length > 0 ? filterProducts.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.imgUrl} className="card-img-top" alt={item.productName} />
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                  </p>
                  <h2 className="card-text">{item.price}</h2>
                </div>
              </div>
            </div>
          )) : <h3 className='display-6  ' style={{textAlign:"center",width:"95%",height:"50%"}}>No Products are found</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
