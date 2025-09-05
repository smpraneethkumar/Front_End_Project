import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { discoutProducts } from './AllData';
import { products } from './AllData';
import { FaStar } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { SliderData } from './AllData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Slice';



const Home = () => {

    const dispatch =useDispatch()

    const handleAdd =(discount)=>{
        dispatch(add(discount))

        console.log(discount);
        
    }

    // const [userProducts, setUserProducts] = useState(products)

    //  const setUserProducts =function(){
    //  }
    const newArr = products.filter((ele) =>
        ele.category === "mobile")

    const best1 = products.filter((ele) =>
        ele.category === "chair",
        // ele.category === "sofa"
    )
    const best2 = products.filter((ele) =>
        ele.category === "sofa")

    const allBest = [...best2, ...best1]

    // console.log(allBest);


    // console.log(best1);
    // console.log(best2);


    //  console.log(newArr);
    // console.log(discoutProducts);

    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1


    }
    return (

        <div  >
            <div style={{ backgroundColor: 'whitesmoke' }}>
                <div className="container" >

                    <Slider {...settings}>
                        {
                            SliderData.map((slider) => (
                                <div className="row d-flex" key={slider.id}>
                                    <div className="col-lg-5">
                                        <h1 className="card-title ">{slider.title}</h1>
                                        <p className="card-text">{slider.desc}</p>
                                        <p className="card-text"><small className="text-body-secondary"><button className='btn btn-secondary'>Visit Collections</button></small></p>
                                    </div>
                                    <div className="col-lg-2">

                                    </div>
                                    <div className="col-lg-5">

                                        <img src={slider.cover} className="img-fluid" alt="..."></img>

                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </div>
            {/* the four card  */}
            <div className="container">
                <div className="row justify-content-center p-2 gap-3 ">
                    <div className="card  " style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: ' rgb(241, 230, 232)', border: 'none', }}>
                        <div className="card-body">
                            <h5 className="card-title" > <FaCarAlt style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /> </h5><br />
                            <h5 className="card-subtitle mb-2 ">Free Shipping</h5><br />
                            <p className="text-30px">Lorem iqsum dolor sit amet</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: 'rgb(203, 236, 245)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <IoCard style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /></h5><br />
                            <h5 className="card-subtitle mb-2 ">Safe Payment</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: 'rgb(227, 246, 198)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <FaShieldAlt style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /></h5><br />
                            <h5 className="card-subtitle mb-2 ">Secure Payment</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: 'rgb(207, 224, 242)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <IoHeadset style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /></h5><br />
                            <h5 className="card-subtitle mb-2 ">Free Shipping</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div> <br /><br />
            {/* forbigdiscount */}
            <div className="container" style={{ backgroundColor: 'whitesmoke', padding: '100px' }}>
                <h1>Big Discount</h1><br />
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            discoutProducts && discoutProducts.map((discount) => (
                                <Link to={`/home/${discount.id}`} key={discount.id}>
                                    <div className="col" >
                                        <div className="card ">
                                            <img src={discount.imgUrl} className="card-img-top" style={{ objectFit: "cover", height: "300px" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{discount.productName}</h5>
                                                <p className="card-text">
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                </p>
                                               <span className='d-flex justify-content-between'> <h2 className="card-text">{discount.price}</h2 > <h1 onClick={()=>{handleAdd(discount)}}><CiCirclePlus/></h1> </span> 
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* new arrives */}

            <div className="container" style={{ padding: '100px' }}>
                <h1>New Arrival</h1><br />
                <div className="card-group gap-4 ">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            newArr && newArr.map((discount) => (
                                <Link to={`/home/${discount.id}`} key={discount.id}>
                                    <div className="col" >
                                        <div className="card ">
                                            <img src={discount.imgUrl} className="card-img-top" style={{ objectFit: "cover", height: "300px" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{discount.productName}</h5>
                                                <p className="card-text">
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                </p>
                                                 <span className='d-flex justify-content-between'> <h2 className="card-text">{discount.price}</h2><h1 onClick={()=>{handleAdd(discount)}}><CiCirclePlus/></h1> </span> 
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* best sales */}
            <div className="container" style={{ padding: '100px' }}>
                <h1>Best Sales</h1> <br />
                <div className="card-group gap-4">
<div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            allBest && allBest.map((discount) => (
                                <Link to={`/home/${discount.id}`} key={discount.id}>
                                    <div className="col" >
                                        <div className="card ">
                                            <img src={discount.imgUrl} className="card-img-top" style={{ objectFit: "cover", height: "300px" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{discount.productName}</h5>
                                                <p className="card-text">
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                    <FaStar color="gold" />
                                                </p>
                                                 <span className='d-flex justify-content-between'> <h2 className="card-text">{discount.price}</h2><h1 onClick={()=>{handleAdd(discount)}}><CiCirclePlus/></h1> </span> 
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
