import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { GoSearch } from "react-icons/go";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const items1: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Coronet
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cufflink
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Grill
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kilt pin
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mable
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mobo
      </a>
    ),
    key: "6",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pippins
      </a>
    ),
    key: "7",
  },
];
const items2: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Armill
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brooch
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Button
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Diadem
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hairpin
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mamuli
      </a>
    ),
    key: "6",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pendilia
      </a>
    ),
    key: "7",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rosary
      </a>
    ),
    key: "8",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tiara
      </a>
    ),
    key: "9",
  },
];
const items3: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bowls
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cups, Mugs & Saucers
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cutting Boards
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dinnerware Sets
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Flatware
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Glassware & Drinkware
      </a>
    ),
    key: "6",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Knife Sets
      </a>
    ),
    key: "7",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Plates
      </a>
    ),
    key: "8",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Serveware
      </a>
    ),
    key: "9",
  },
];
const items4: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Coffee & side tables
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Living room lighting
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Living room storage
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Living room textiles & rugs
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sofas & armchairs
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        TV & media furniture
      </a>
    ),
    key: "6",
  },
];
const items5: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brooches
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chairs
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        End Tables
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medical
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medieval
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Silambu
      </a>
    ),
    key: "6",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tengura
      </a>
    ),
    key: "7",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tiara
      </a>
    ),
    key: "8",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tie clip
      </a>
    ),
    key: "9",
  },
];
const items6: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Candles
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chatelaine
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clocks
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Floor Mirrors
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lamps & Lighting
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rugs
      </a>
    ),
    key: "6",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Runners
      </a>
    ),
    key: "7",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wall Decor
      </a>
    ),
    key: "8",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wall Mirrors
      </a>
    ),
    key: "9",
  },
];
const items7: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Default sorting
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sort by popularity
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sort by average rating
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sort by latest
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sort by price: low to high
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sort by price: high to low
      </a>
    ),
    key: "6",
  },
];

const Category = () => {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleAddToCart = () => {
  //   alert("Product added to cart!");
  // };

  // const handleWishlist = () => {
  //   alert("Product added to wishlist!");
  // };

  // const handleCompare = () => {
  //   alert("Product added to compare list!");
  // };

  // const handleQuickView = () => {
  //   alert("Quick view opened!");
  // };

  return (
    <>
      <div className="plate-outer">
        <div className="container">
          <div className="grouped-inner">
            <h2>Plates</h2>
            <div className="grouped-path">
              <Link to="/" href="#">
                Home
              </Link>
              <span>&gt;</span>
              <a href="#">Kitchen & Dining</a>
              <span>&gt;</span>
              <a href="#">Plates</a>
            </div>
          </div>
        </div>
      </div>

      <div className="category-outer">
        <div className="container">
          <div className="category-inner">
            <div className="left-category">
              <div className="category-list-heading">
                <h3>Categories</h3>
              </div>
              <div className="category-dropdown">
                <ul>
                  <li>
                    <a href="#">Anklet</a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <Dropdown menu={{ items: items1 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Bag charm
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </a>
                  </li>
                  <li>
                    <a href="#">Circlet</a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <Dropdown menu={{ items: items2 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Earring
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <Dropdown menu={{ items: items3 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Kitchen & Dining
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Dropdown menu={{ items: items4 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Living Room Sets
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </a>
                  </li>
                  <li>
                    <a href="#">Navaratna</a>
                  </li>
                  <li>
                    <a href="#">
                      <Dropdown menu={{ items: items5 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Necklaces
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Dropdown menu={{ items: items6 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Shoe buckle
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </a>
                  </li>
                  <li>
                    <a href="#">TV Stands</a>
                  </li>
                  <li>
                    <a href="#">Uncategorized</a>
                  </li>
                </ul>
              </div>
              <div className="compare">
                <p>No products to compare</p>
                <div className="compare-btn">
                  <a className="clear-btn" href="#">
                    Clear all
                  </a>
                  <a className="comparesion-btn" href="#">
                    Compare
                  </a>
                </div>
              </div>
              <div className="product-tag">
                <div className="product-tag-heading">
                  <h3>Product tags</h3>
                </div>
                <div className="product-tags">
                  <a href="#">accesories</a>
                  <a href="#">blouse</a>
                  <a href="#">clothes</a>
                  <a href="#">desktop</a>
                  <a href="#">digital</a>
                  <a href="#">fashion</a>
                  <a href="#">laptop</a>
                  <a href="#">men</a>
                  <a href="#">women</a>
                </div>
                <div className="jwellery-coll-img">
                  <div className="jwellery-coll-img-inner">
                    <img
                      src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/05/banner-sidebar.jpg"
                      alt="collection"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="right-category">
              <div className="product-res-penal">
                <div className="max-w-4xl mx-auto bg-gray-50 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <button className="p-2 border border-gray-300 bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                        </svg>
                      </button>
                      <button className="p-2 border border-gray-300 bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <line x1="8" y1="6" x2="21" y2="6"></line>
                          <line x1="8" y1="12" x2="21" y2="12"></line>
                          <line x1="8" y1="18" x2="21" y2="18"></line>
                          <line x1="3" y1="6" x2="3.01" y2="6"></line>
                          <line x1="3" y1="12" x2="3.01" y2="12"></line>
                          <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    <div className="alert-result">
                      <p>Showing the single result</p>
                    </div>
                    <div className="sort">
                      <span>Sort By :</span>
                      <Dropdown menu={{ items: items7 }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Default sorting
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </div>
                  </div>

                  <div className="product-main">
                    <div className="product-inner">
                      <div className="product-item">
                        <img
                          src="http://wp.plazathemes.com/corano/wp-content/uploads/2018/11/4.jpg"
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
                    </div>
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

export default Category;
