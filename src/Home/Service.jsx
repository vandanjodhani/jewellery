import React from 'react'
import { SlPlane, SlSupport } from "react-icons/sl";
import { TiArrowBackOutline } from "react-icons/ti";
import { MdPayment } from "react-icons/md";

const Service = () => {
    return (
        <>
            {/* Service section start */}
            <div className="service-outer">
                <div className="container">
                    <div className="service-inner">

                        <div className="service">
                            <div className="inner-service">
                                <div className="service-logo">
                                    <SlPlane />
                                </div>
                                <div className="service-info">
                                    <h4>Free Shipping</h4>
                                    <h6>Free shipping on all US order or order above $200</h6>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="inner-service">
                                <div className="service-logo">
                                    <SlSupport />
                                </div>
                                <div className="service-info">
                                    <h4>Support 24/7</h4>
                                    <h6>Contact us 24 hours a day, 7 days a week</h6>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="inner-service">
                                <div className="service-logo">
                                    <TiArrowBackOutline />
                                </div>
                                <div className="service-info">
                                    <h4>30 Days Return</h4>
                                    <h6>Simply return it within 30 days for an exchange</h6>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="inner-service">
                                <div className="service-logo">
                                    <MdPayment />
                                </div>
                                <div className="service-info">
                                    <h4>100% Payment Secure</h4>
                                    <h6>We ensure secure payment with PEV</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Service section end */}
        </>
    )
}

export default Service
