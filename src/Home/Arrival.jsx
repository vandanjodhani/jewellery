import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Arrival = () => {
  const products = [
    {
      id: 1,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/7.jpg",
      category1: "Chatelaine",
      category2: "Necklaces",
      title: "Diamond Band Ring",
      price: "$100.00"
    },
    {
      id: 2,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/15.jpg",
      category1: "Brooches",
      category2: "Flatware",
      title: "Diamond Band Ring",
      price: "$86.00"
    },
    {
      id: 3,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/2.jpg",
      category1: "Necklaces",
      category2: "Runners",
      title: "Dissent Collar Earring",
      price: "$95.00"
    },
    {
      id: 4,
      img: "http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/13.jpg",
      category1: "Necklaces",
      category2: "Tiara",
      title: "Long Earrings Women",
      price: "$70.00"
    }
  ]
  return (
    <>
      <div className="arrival-main" data-aos="flip-right">
        <div className="container">
          <div className="arrival-inner">
            <div className="arrival-top">
              <h2>New Arrivals</h2>
              <p>Add new arrivals to weekly lineup</p>
              <ul className="arrival-list">
                <li>
                  <a href="#" className="list-first">
                    Bracelets
                  </a>
                </li>
                <li>
                  <a href="#">Earrings</a>
                </li>
                <li>
                  <a href="#">Nacklaces</a>
                </li>
              </ul>
            </div>
            <div className="arrival-bottom">
              <div className="arrival-bot-inner">

                {
                  products && products.map((e) => {
                    return (
                      <>
                        <div className="arrival-item">
                          <Link to={`/arrival/${e.id}`}>
                            <img
                              src={e.img}
                              alt="arrival"
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
                          <div className="arrival-item-content">
                            <ul className="arrival-list">
                              <li>
                                <a href="#">{e.category1} </a>
                              </li>
                              <li>
                                <a href="#">{e.category2}</a>
                              </li>
                            </ul>
                            <p>
                              <Link to={`/arrival/${e.id}`}>{e.title}</Link>
                            </p>
                            <span>{e.price}</span>
                          </div>
                          <div className="arrival-btn">
                            <button className="button">Add To Cart</button>
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

export default Arrival;
