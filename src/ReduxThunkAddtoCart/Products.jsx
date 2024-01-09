import React from 'react'
import Items from './SubComponent/Items'
import Subheader from './SubComponent/Subheader'

const Products = () => {
    return (
        <section className='mt-5'>
            <div className="container">
                <div className="area p-4 bg-white bor-rad shadow">
                    <Subheader />
                    <Items />
                </div>
            </div>
        </section>
    )
}

export default Products