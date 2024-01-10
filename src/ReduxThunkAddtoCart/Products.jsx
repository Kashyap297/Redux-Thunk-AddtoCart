import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../Component/images/cart.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Redux/Action'


const Products = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.products)

    const handleAddToCart = (id) => {
        // console.log(id);
        dispatch(addToCart(id));
    }

    return (
        <section className='my-5'>
            <div className="container">
                <div className="area p-4 bg-white bor-rad shadow">
                    <header className='bg-dark p-3 bor-rad shadow'>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className='m-0 gr-text fs-5'>Smart Devices</p>
                            <div className="cart-item d-flex">
                                <div className="cart p-2 me-3">
                                    Bag : 0
                                </div>
                                <Link to='/cart' className='btn btn-light'>Cart<img src={cart} alt="" width="24px" className='ms-2' /></Link>
                            </div>
                        </div>
                    </header>
                    <div className="product_area mt-4">
                        <div className="row">
                            {
                                data.map((item, id) => {
                                    return (
                                        <div className="col-3" key={id}>
                                            <div className="product border-1 bor-r  pad-sm shadow">
                                                <div className="card-img">
                                                    <img src={item.img} alt="" className='w-100 bor-rad img-fluid' />
                                                </div>
                                                <div className="card-body mt-3 px-1">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="title">
                                                            <h6 className='fs-5 fw-bold mb-0 clr-gr'>{item.name}</h6>
                                                            <p className='font-sz mb-2 lightslategrey text-justify pe-2'>{item.disc}</p>
                                                        </div>
                                                    </div>
                                                    <div className="addbtn d-flex align-items-center justify-content-between  mb-2">
                                                        <span className='fw-bold clr-gr'>Price : {item.price} /-</span>
                                                        <button className='btn btn-dark' onClick={() => handleAddToCart(id)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products