import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Product = () => {
  const products1 = [
    { id: 1, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/9.jpg", category1: "Rugs", category2: "Wall Decor", title: "Carat Solitaire Diamond", price: "$78.00" },
    { id: 2, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/6.jpg", category1: "Brooches", category2: "Candles", category3: ", Wall Decor", title: "Pear-Shaped Black", price: "$60.00 - $100.00" },
    { id: 3, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/3.jpg", category1: "Candles", category2: "Wall Decor", title: "The World Jewelry", price: "$115.00" },
    { id: 4, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/8.jpg", category1: "Candles", category2: "Wall Decor", title: "Women’s Falla Earrings", price: "$60.00" }
  ];
  const products2 = [
    { id: 5, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/5.jpg", category1: "Clocks", category2: "Wall Decor", title: "Lapis Hoop Earrings", price: "$115.00" },
    { id: 6, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/1.jpg", category1: "Rugs", category2: "Wall Decor", title: "Sterling Silver Genuine", price: "$70.00" },
    { id: 7, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/10.jpg", category1: "Brooches", category2: "Wall Decor", title: "Women’s Bijou Ear", price: "$45.00" },
    { id: 8, image: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/19.jpg", category1: "Candles", category2: "Wall Decor", title: "ZMens Womens 10k", price: "$7.00 - $9.00" }
  ];
  return (
    <>
      <div className="product-main">
        <div className="container">
          <div className="product-inner">
            <div className="product-top">
              <h2>Our Products</h2>
              <p>Add new products to weekly lineup</p>
            </div>
            <div className="product-bottom">
              <div className="product-bot-inner">
                {
                  products1 && products1.map((e) => {
                    return (
                      <>
                        <div className="product-item">
                          <Link to={`/product/${e.id}`}>
                            <img
                              src={e.image}
                              alt="product"
                            />
                          </Link>
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
                                <a href="#">{e.category1}, </a>
                              </li>
                              <li>
                                <a href="#">{e.category2}</a>
                              </li>
                              <li>
                                <a href="#">{e.category3}</a>
                              </li>
                            </ul>
                            <Link to={`/product/${e.id}`}>
                              <p>{e.title}</p>
                            </Link>
                            <span className="pro-price">{e.price}</span>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
              <div className="bot-sec">
                {
                  products2 && products2.map((e) => {
                    return (
                      <>
                        <div className="product-item">
                          <Link to={`/product/${e.id}`}>
                            <img
                              src={e.image}
                              alt="product"
                            />
                          </Link>
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
                                <a href="#">{e.category1}, </a>
                              </li>
                              <li>
                                <a href="#">{e.category2}</a>
                              </li>
                              <li>
                                <a href="#">{e.category3}</a>
                              </li>
                            </ul>
                            <Link to={`/product/${e.id}`}>
                              <p>{e.title}</p>
                            </Link>
                            <span className="pro-price">{e.price}</span>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
