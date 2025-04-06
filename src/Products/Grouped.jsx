import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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
    key: "2",
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
  },
];

const Grouped = () => {
  const [mainImage, setMainImage] = useState(
    "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/6-600x600.jpg"
  );
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const thumbnails = [
    {
      url: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/6-600x600.jpg",
      alt: "Pear-Shaped Black Ring Front View",
    },
    {
      url: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7.jpg",
      alt: "Pear-Shaped Black Ring Side View",
    },
    {
      url: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/8.jpg",
      alt: "Pear-Shaped Black Ring Back View",
    },
    {
      url: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9.jpg",
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
      <div className="grouped-head">
        <div className="container">
          <div className="grouped-inner">
            <h2>Product Details</h2>
            <div className="grouped-path">
              <Link to="/" href="#">
                Home
              </Link>
              <span>&gt;</span>
              <a href="#">Necklaces</a>
              <span>&gt;</span>
              <a href="#">Brooches</a>
              <span>&gt;</span>
              <a href="#">Pear-Shaped Black</a>
            </div>
          </div>
        </div>
      </div>

      <div className="grouped-product-outer">
        <div className="container">
          <div className="grouped-product-inner">
            <div className="product-images">
              <div className="main-image-container">
                {isLoading && <div className="loading-spinner">Loading...</div>}
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
                    className={`thumbnail ${
                      activeThumbnail === index ? "active" : ""
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
              <h1 className="product-title">Pear-Shaped Black</h1>

              <div className="star-rating">
                ★★★★★ <span className="review-count">(1 customer review)</span>
              </div>

              <div className="price-range">$60.00 - $100.00</div>

              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                posuere metus vitae arcu imperdiet, id aliquet ante scelerisque.
                Sed sit amet sem vitae urna fringilla tempus. Maecenas suscipit
                dui nec nisl laoreet eleifend. Cras ex quam, ullamcorper sit
                amet accumsan nec, commodo ut lorem.
              </p>

              <div className="product-options">
                <div className="option-item">
                  <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    max="10"
                    className="quantity-input"
                  />
                  <div className="option-details">
                    <span className="option-title">Sterling Silver Bead</span>
                    <span className="option-price">$80.00</span>
                  </div>
                </div>

                <div className="option-item">
                  <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    max="10"
                    className="quantity-input"
                  />
                  <div className="option-details">
                    <span className="option-title">Panther Bracelet</span>
                    <span className="option-price">$100.00</span>
                  </div>
                </div>

                <div className="option-item">
                  <button className="btn btn-secondary">READ MORE</button>
                  <div className="option-details">
                    <span className="option-title">Silvermist Bracelet</span>
                    <span className="option-price sale">
                      <span className="original-price">$68.00</span> $60.00
                    </span>
                  </div>
                </div>

                <div className="option-item">
                  <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    max="10"
                    className="quantity-input"
                  />
                  <div className="option-details">
                    <div className="out-of-stock">OUT OF STOCK</div>
                    <span className="option-title">Diamond Band Ring</span>
                    <span className="option-price">$86.00</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button className="btn btn-primary">ADD TO CART</button>
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
                <div className="sku">SKU: P001</div>
                <div className="categories">
                  Categories: <a href="#">Brooches</a>, <a href="#">Candles</a>,{" "}
                  <a href="#">Wall Decor</a>
                </div>
                <div className="tags">
                  Tags: <a href="#">Women</a>
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
                      alt="product"
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
                      alt="product"
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
                      <p>Women's Bijou Ear</p>
                    $86.00
                  </div>
                </div>
                <div className="product-item">
                    <img
                      src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9.jpg"
                      alt="product"
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
                      alt="product"
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

      <div className="product-main upsell-product">
        <div className="container">
          <div className="product-inner">
            <div className="product-top">
              <h2>Upsell Products</h2>
              <p>Add our products to weekly lineup</p>
            </div>
            <div className="product-bottom">
              <div className="product-bot-inner">
                <div className="product-item">
                    <img
                      src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/4.jpg"
                      alt="product"
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
                        <a href="#">Cutting Boards , </a>
                      </li>
                      <li>
                        <a href="#">Plates</a>
                      </li>
                    </ul>
                      <p>Extra Large Bamboo</p>
                    $80.00
                  </div>
                </div>
                <div className="product-item">
                  <img
                    src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/5.jpg"
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
                    <button className="button">view products</button>
                  </div>
                  <div className="product-item-content">
                    <ul className="product-list">
                      <li>
                        <a href="#">Clocks , </a>
                      </li>
                      <li>
                        <a href="#">Wall Decor</a>
                      </li>
                    </ul>
                    <p>Lapis Hoop Earrings</p>
                    $115.00
                  </div>
                </div>
                <div className="product-item">
                  <img
                    src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/3.jpg"
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
                        <a href="#">Candles , </a>
                      </li>
                      <li>
                        <a href="#">Wall Decor</a>
                      </li>
                    </ul>
                    <p>The World Jewelry</p>
                    $115.00
                  </div>
                </div>
                <div className="product-item">
                  <img
                    src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7.jpg"
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
                        <a href="#">Chatelaine , </a>
                      </li>
                      <li>
                        <a href="#">Necklaces</a>
                      </li>
                    </ul>
                    <p>Diamond Band Ring</p>
                    <span>$100.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grouped;
