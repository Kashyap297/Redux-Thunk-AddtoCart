import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import home from '../../Component/images/home.png'
import bin from '../../Component/images/bin.png'
import { useDispatch, useSelector } from 'react-redux'
import { incrementItem } from '../Redux/Action'
import { decrementItem } from '../Redux/Action'
import { deleteItem } from '../Redux/Action'

const Cart = () => {

    const dispatch = useDispatch()
    const carts = useSelector((state) => state.cart)
    const bag = useSelector((state) => state.bag)
    const totalAmount = useSelector((state) => state.totalAmount)
    console.log(carts);
    // console.log(totalAmount);    

    const [noRecord, setNoRecord] = useState(false)
    useEffect(() => {
        if (carts.length === 0) {
            setNoRecord(true)
        } else {
            setNoRecord(false)
        }
    }, [carts])

    const handleIncrement = (id) => {
        dispatch(incrementItem(id))
    }
    const handleDecrement = (id) => {
        dispatch(decrementItem(id))
    }
    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return (
        <section className='my-5'>
            <div className="container">
                <div className="area p-4 bg-white bor-rad shadow">
                    <header className='bg-dark p-3 bor-rad shadow'>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className='m-0 gr-text fs-5'>Shopping Cart</p>
                            <div className="cart-item d-flex">
                                <div className="cart p-2 me-3">
                                    {bag} items
                                </div>
                                <Link to='/products' className='btn btn-light align-items-center'>Products<img src={home} alt="" width="24px" className='ms-2' /></Link>
                            </div>
                        </div>
                    </header>
                    <div className="cart_area border shadow mt-4 p-3 bor-rad ">
                        <div className="row">
                            <div className="col-8">
                                <table className='table table-hover mb-0 table-bordered table-rounded p-3 text-center align-middle'>
                                    <thead className='table-dark'>
                                        <tr>
                                            <th className='gr-text col-5'>Items</th>
                                            <th className='gr-text col'>Price</th>
                                            <th className='gr-text col'>Qty</th>
                                            <th className='gr-text col'>Sub-Total</th>
                                            <th className='gr-text col'>Bin</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        {
                                            noRecord ? (
                                                <>
                                                    <tr>
                                                        <td className='text-center fw-bold pe-0 py-3 fs-4 text-danger' colSpan={5}>
                                                        cart is feeling a bit lonely</td>
                                                        
                                                    </tr>
                                                </>
                                            ) : (

                                                carts.map((item, id) => {
                                                    return (
                                                        <tr key={id}>
                                                            <td className='d-flex justify-content-between align-items-center py-3'>
                                                                <div className="pro-img me-3">
                                                                    <img src={item.img} alt="" className='image-fluid bor-rad' />
                                                                </div>
                                                                <div className="title">
                                                                    <h6 className='text-start fw-bold mb-0 clr-gr'>{item.name}</h6>
                                                                    <p className='font-sz mb-2 lightslategrey text-justify'>{item.disc}</p>
                                                                </div>
                                                            </td>
                                                            <td className=''>{item.price}/-</td>
                                                            <td className=''>
                                                                <div className="quantity-field" >
                                                                    <button className="value-button decrease-button" onClick={() => handleDecrement(id)}>-</button>
                                                                    <div className="number">{item.qty}</div>
                                                                    <button className="value-button increase-button" onClick={() => handleIncrement(id)}>+</button>
                                                                </div>
                                                            </td>
                                                            <td className=''>{item.subtotal}/-</td>
                                                            <td className=''>
                                                                <button className="btn btn-light" onClick={() => handleDelete(id)}>
                                                                    <img src={bin} alt="" width="24px" />
                                                                </button></td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="col-4">
                                <div className="summary">
                                    <h3 className='text-center border-bottom pb-2 clr-gr'>Summary</h3>
                                    <div className="bill mt-3 px-3 border-bottom pb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className='fs-5 fw-bold clr-gr'>Sub-Total</span>
                                            <span className='fs-5'>{totalAmount}/-</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className='fs-5 fw-bold clr-gr'>Delivery Charges</span>
                                            <span className='fs-5'>FREE <span className='linethrough ms-2 lightslategrey'>120/-</span></span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3 px-3 border-bottom pb-3">
                                        <span className='fs-5 fw-bold clr-gr'>Grand Total</span>
                                        <span className='fs-4 fw-bold'>{totalAmount}/-</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart