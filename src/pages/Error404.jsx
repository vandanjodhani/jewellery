import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <div className="error-outer">
                <div className="container">
                    <div className="error-inner">
                        <h2>OOPS! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, has been removed, changed or is temporarity unavailable.</p>
                        <div className="error-inp">
                            <input type="text" placeholder='Search...' />
                            <IoSearchOutline />
                        </div>
                        <div className="error-btn">
                            <Link to="/">Back To Home Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404
