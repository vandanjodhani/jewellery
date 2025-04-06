import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            {/* footer section start  */}
            <div className="footer-outer">
                <div className="container">
                    <div className="footer-inner">

                        {/* footer-top section start */}
                        <div className="footer-top">
                            <div className="corano">
                                <div className="corano-inner">
                                    <div className="corano-logo">
                                        <a href="#">
                                            <img src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/07/logo_corano.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <div className="corano-text">
                                        <p>
                                            We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact-inner">
                                    <div className="contact-title">
                                        <h3>Contact Us</h3>
                                        <ul>
                                            <li>
                                                <i class="fa-solid fa-house"></i>
                                                <span>4710-4890 Breckinridge USA</span>
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-envelope"></i>
                                                <span>support@plazathemes.com</span>
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-phone"></i>
                                                <span>1-1001-234-5678</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="information">
                                <div className="information-inner">
                                    <div className="information-title">
                                        <h3>Information</h3>
                                        <ul>
                                            <li>
                                                <Link to={"about"}>About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="contact" >Contact</Link>
                                            </li>
                                            <li>
                                                <span>Privacy Policy</span>
                                            </li>
                                            <li>
                                                <span>Frequently Questions</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="follow">
                                <div className="follow-inner">
                                    <div className="follow-title">
                                        <h3>Follow Us</h3>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://x.com/">
                                                    <i class="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/">
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://rss.com/">
                                                    <i class="fa-solid fa-rss"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer-top section end */}

                        {/* footer-middle section start */}
                        <div className="middle-footer">

                            <div className="newsletter">
                                <div className="newsletter-inner">
                                    <div className="newsletter-title">
                                        <h4>Sign up to Newsletter</h4>
                                    </div>
                                    <div className="newsletter-inp">
                                        <input type="email" placeholder='Your email address...' required='' />
                                        <button type='submit'><a href="#">Subscribe</a></button>
                                        <a href="#" className='email-button'><i class="fa-regular fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="payment">
                                <div className="payment-inner">
                                    <img src="assets/image/payment.png" alt="payment-options" />
                                </div>
                            </div>

                        </div>
                        {/* footer-middle section end */}

                        {/* footer-bottom section start */}
                        <div className="bottom-footer">
                            <div className="bottom-footer-inner">
                                <p>Copyright © <a href="#">RoadThemes</a>. All Right Reserved.</p>
                            </div>
                        </div>
                        {/* footer-middle section end */}
                    </div>
                </div>
            </div>
            {/* footer section end */}
        </>
    )
}

export default Footer
