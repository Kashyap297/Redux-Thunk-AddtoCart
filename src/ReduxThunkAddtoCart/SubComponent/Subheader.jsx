import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../../Component/images/cart.png'

const Subheader = () => {

    const [active, setActive] = useState(true)

    const handleActive = () => {
        setActive(false)
    }

    return (
        <header className='bg-dark p-3 bor-rad shadow'>
            <div className="d-flex align-items-center justify-content-between">
                <p className='m-0 gr-text'>Products List</p>
                {active ? <Link to='/cart' className='btn btn-light' onClick={handleActive}>Cart<img src={cart} alt="" width="24px" /></Link> : <Link to='/item' className='btn btn-light'>Products<img src={cart} alt="" width="24px" /></Link>}
            </div>
        </header>
    )
}

export default Subheader