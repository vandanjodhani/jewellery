import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    return (
        <>
            <div className="plate-outer">
                <div className="container">
                    <div className="grouped-inner">
                        <h2>Wishlist</h2>
                        <div className="grouped-path">
                            <Link to="/" href="#">
                                Home
                            </Link>
                            <span>&gt;</span>
                            <a href="#"> Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="structure-outer">
                <div className="container">
                    <div className="structure-inner">
                        <table>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='product-sruct-info'>Product Name</td>
                                <td className='product-sruct-info'> Unit Price </td>
                                <td className='product-sruct-info'>Stock Status </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={6}>No products were added to the wishlist</td>
                            </tr>
                            <tr>
                                <td colSpan={6}></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
