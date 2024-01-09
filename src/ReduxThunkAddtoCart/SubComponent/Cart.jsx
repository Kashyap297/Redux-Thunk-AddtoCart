import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../Component/images/cart.png'
import Subheader from './Subheader'

const Cart = () => {
    return (
        <section className='mt-5'>
            <div className="container">
                <div className="area p-4 bg-white bor-rad shadow">
                    <Subheader />
                    <h2>Cart</h2>
                </div>
            </div>
        </section>
    )
}

export default Cart