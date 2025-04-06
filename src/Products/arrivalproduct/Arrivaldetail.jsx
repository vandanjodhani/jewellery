import React, { useState } from "react";
import {
    FaFacebookF,
    FaGooglePlusG,
    FaLinkedinIn,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Tabs } from "antd";
import { TabsProps } from "antd";

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps["items"] = [
    {
        key: "1",
        label: "Description",
        children: (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                    augue nec est tristique auctor. Donec non est at libero vulputate
                    rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                    mi, vulputate adipiscing cursus eu, suscipit id nulla.
                </p>
                <p>
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
                    sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
                    Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
                    vulputate, sapien libero hendrerit est, sed commodo augue nisi non
                    neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
                    accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
                    luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                    euismod eget.
                </p>
            </div>
        ),
    },
    {
        key: "3",
        label: "Reviews (1)",
        children: (
            <div>
                <p>There are no reviews yet.</p>
                <span>Be the first to review “Pear-Shaped Black” </span>
                <p>
                    You must be <a href="#">logged in</a> to post a review.
                </p>
            </div>
        ),
    }
];

const Arrivaldetail = () => {

    const { id } = useParams();
    const products = [
        {
            id: 1, 
            img1: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7.jpg",
            img2: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/8.jpg",
            img3: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9.jpg",
            img4: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/10.jpg",
            path1: "Necklaces", path2: "Brooches", path3: "Diamond Band Ring", title: "Diamond Band Ring", price: "$100.00", category1: "Chatelaine",
            category2: "Necklaces", tag: "Blouse"
        },
        {
            id: 2,
            img1: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15.jpg",
            img2: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/16.jpg",
            img3: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/17.jpg",
            img4: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/18.jpg",
            path1: "Necklaces", path2: "Brooches", path3: "Diamond Band Ring", title: "Diamond Band Ring", price: "$86.00", category1: "Brooches",
            category2: "Flatware", tag: "Accesories", tag2: ", Desktop"
        },
        {
            id: 3, 
            img1: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/2.jpg",
            img2: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/3.jpg",
            img3: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/4.jpg",
            img4: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/5.jpg", 
            path1: "Shoe buckle", path2: "Runners", path3: "Dissent Collar Earring", title: "Dissent Collar Earring", price: "$95.00", category1: "Necklaces",
            category2: "Runners", tag: "Laptop"
        },
        {
            id: 4, 
            img1: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/13.jpg",
            img2: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/14.jpg",
            img3: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15.jpg",
            img4: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/16.jpg",
            path1: "Necklaces", path2: "Tiara", path3: "Long Earrings Women", title: "Long Earrings Women", price: "$70.00", category1: "Necklaces",
            category2: "Tiara", tag: "Laptop"
        },
    ];
    const product = products.find((product) => product.id === parseInt(id));

    const [mainImage, setMainImage] = useState(
        product.img1
    );
    const [activeThumbnail, setActiveThumbnail] = useState(0);
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const thumbnails = [
        {
            url: product.img1,
            alt: "Pear-Shaped Black Ring Front View",
        },
        {
            url: product.img2,
            alt: "Pear-Shaped Black Ring Side View",
        },
        {
            url: product.img3,
            alt: "Pear-Shaped Black Ring Back View",
        },
        {
            url: product.img4,
            alt: "Pear-Shaped Black Ring Detail View",
        },
    ];

    const handleThumbnailClick = (index) => {
        setIsLoading(true);
        setMainImage(thumbnails[index].url);
        setActiveThumbnail(index);
        setImageError(false);
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setIsLoading(false);
    };

    return (
        <>
            <div className="simple">
                <div className="grouped-head">
                    <div className="container">
                        <div className="grouped-inner">
                            <h2>Product Details</h2>
                            <div className="grouped-path">
                                <Link to="/" href="#">
                                    Home
                                </Link>
                                <span>&gt;</span>
                                <a href="#">{product.path1} , </a>
                                <span>&gt;</span>
                                <a href="#"> {product.path2} , </a>
                                <span>&gt;</span>
                                <a href="#"> {product.path3}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grouped-product-outer">
                    <div className="container">
                        <div className="grouped-product-inner">
                            <div className="product-images">
                                <div className="main-image-container">
                                    {isLoading && (
                                        <div className="loading-spinner">Loading...</div>
                                    )}
                                    {imageError ? (
                                        <div className="error-message">Failed to load image</div>
                                    ) : (
                                        <img
                                            src={mainImage}
                                            alt="Pear-Shaped Black Ring"
                                            className="main-image"
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                        />
                                    )}
                                </div>

                                <div className="thumbnail-container">
                                    {thumbnails.map((thumbnail, index) => (
                                        <img
                                            key={index}
                                            src={thumbnail.url}
                                            alt={thumbnail.alt}
                                            className={`thumbnail ${activeThumbnail === index ? "active" : ""
                                                }`}
                                            onClick={() => handleThumbnailClick(index)}
                                            width="150"
                                            height="150"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="product-details">
                                <div className="nav-buttons">
                                    <div className="nav-btn prev">&#8249;</div>
                                    <div className="nav-btn next">&#8250;</div>
                                </div>
                                <h1 className="product-title">{product.title}</h1>

                                <div className="star-rating">
                                    ★★★★★{" "}
                                    <span className="review-count">(1 customer review)</span>
                                </div>

                                <div className="price-range diamond-ring-price">{product.price}</div>

                                <p className="product-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco,Proin lectus ipsum, gravida et mattis vulputate,
                                    tristique ut lectus
                                </p>

                                <div className="product-options">
                                    <div className="color-opt">
                                        <input
                                            type="number"
                                            defaultValue="1"
                                            min="0"
                                            max="10"
                                            className="quantity-input"
                                        />
                                        <div className="action-buttons">
                                            <button className="btn btn-primary">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="wishlist-compare">
                                    <div className="wishlist-btn">
                                        <span>♡</span> Add to Wishlist
                                    </div>
                                    <div className="compare-btn">
                                        <span>⟲</span> Compare
                                    </div>
                                </div>

                                <div className="product-meta">
                                    <div className="categories">
                                        Categories: <a href="#">{product.category1}</a>, <a href="#">{product.category2}</a>
                                    </div>
                                    <div className="tags">
                                        Tags: <a href="#">{product.tag}</a>
                                        <a href="#">{product.tag2}</a>
                                    </div>
                                </div>

                                <div className="social-share">
                                    <span className="share-title">Share</span>
                                    <div className="social-icons">
                                        <a href="#" className="social-icon">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <FaPinterest />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <FaGooglePlusG />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="description-outer">
                    <div className="container">
                        <div className="description-inner">
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>
                    </div>
                </div>

                <div className="product-main related-product">
                    <div className="container">
                        <div className="product-inner">
                            <div className="product-top">
                                <h2>Related Products</h2>
                                <p>Add our products to weekly lineup</p>
                            </div>
                            <div className="product-bottom">
                                <div className="product-bot-inner">
                                    <div className="product-item">
                                        <img
                                            src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15.jpg"
                                            alt=""
                                        />
                                        <ul className="arrival-opt-but">
                                            <li>
                                                <IoMdHeartEmpty />
                                            </li>
                                            <li>
                                                <BsArrowRepeat />
                                            </li>
                                            <li>
                                                <GoSearch />
                                            </li>
                                        </ul>
                                        <div className="arrival-btn">
                                            <button className="button">Add To Cart</button>
                                        </div>
                                        <div className="product-item-content">
                                            <ul className="product-list">
                                                <li>
                                                    <a href="#">Brooches ,</a>
                                                </li>
                                                <li>
                                                    <a href="#">Flatware</a>
                                                </li>
                                            </ul>
                                            <p>Diamond Band Ring</p>
                                            $86.00
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <img
                                            src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/10.jpg"
                                            alt=""
                                        />
                                        <ul className="arrival-opt-but">
                                            <li>
                                                <IoMdHeartEmpty />
                                            </li>
                                            <li>
                                                <BsArrowRepeat />
                                            </li>
                                            <li>
                                                <GoSearch />
                                            </li>
                                        </ul>
                                        <div className="arrival-btn">
                                            <button className="button">Add to cart</button>
                                        </div>
                                        <div className="product-item-content">
                                            <ul className="product-list">
                                                <li>
                                                    <a href="#">Brooches ,</a>
                                                </li>
                                                <li>
                                                    <a href="#">Wall Decor</a>
                                                </li>
                                            </ul>
                                            <p>Women’s Bijou Ear</p>
                                            $86.00
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <img
                                            src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9.jpg"
                                            alt=""
                                        />
                                        <ul className="arrival-opt-but">
                                            <li>
                                                <IoMdHeartEmpty />
                                            </li>
                                            <li>
                                                <BsArrowRepeat />
                                            </li>
                                            <li>
                                                <GoSearch />
                                            </li>
                                        </ul>
                                        <div className="arrival-btn">
                                            <button className="button">Add To Cart</button>
                                        </div>
                                        <div className="product-item-content">
                                            <ul className="product-list">
                                                <li>
                                                    <a href="#">Rugs , </a>
                                                </li>
                                                <li>
                                                    <a href="#">Wall Decor</a>
                                                </li>
                                            </ul>
                                            <p>Carat Solitaire Diamond</p>
                                            $78.00
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <img
                                            src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/1.jpg"
                                            alt=""
                                        />
                                        <ul className="arrival-opt-but">
                                            <li>
                                                <IoMdHeartEmpty />
                                            </li>
                                            <li>
                                                <BsArrowRepeat />
                                            </li>
                                            <li>
                                                <GoSearch />
                                            </li>
                                        </ul>
                                        <div className="arrival-btn">
                                            <button className="button">Add To Cart</button>
                                        </div>
                                        <div className="product-item-content">
                                            <ul className="product-list">
                                                <li>
                                                    <a href="#">Rugs , </a>
                                                </li>
                                                <li>
                                                    <a href="#">Wall Decor</a>
                                                </li>
                                            </ul>
                                            <p>Sterling Silver Genuine</p>
                                            <del>$80.00</del>
                                            <span>$70.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Arrivaldetail
