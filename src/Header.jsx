import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";

const Header = () => {
  const [isSideHeaderOpen, setIsSideHeaderOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideHeader = () => {
    setIsSideHeaderOpen(!isSideHeaderOpen);
  };

  const items1 = [
    {
      label: (
        <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
          Coronet
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Cufflink
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Grill
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Kilt pin
        </a>
      ),
      key: "4",
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Mable
        </a>
      ),
      key: "5",
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Mobo
        </a>
      ),
      key: "6",
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          Pippins
        </a>
      ),
      key: "7",
    },
  ];

  return (
    <>
      {/* Side Header */}
      <div className={`side-header ${isSideHeaderOpen ? 'open' : ''}`}>
        <div className="side-header-inner">
          <div className="side-header-top">
            <button className="close-btn" onClick={toggleSideHeader}>
              ×
            </button>
          </div>
          <div className="side-header-content">
            <div className="header-sect-list">
              <div className="header-side-search">
                <IoIosSearch />
                <input type="text" placeholder="Search Product" />
              </div>
              <ul className="header-list">
                <li>
                  <Dropdown menu={{ items: items1 }} trigger={["click"]}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Bag charm
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown menu={{ items: items1 }} trigger={["click"]}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Bag charm
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown menu={{ items: items1 }} trigger={["click"]}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Bag charm
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown menu={{ items: items1 }} trigger={["click"]}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Bag charm
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="header-acc">
                <h2>My Account</h2>
                <ol>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-inner">
          {/* header-top section start */}
          <div className="header-top">
            <div className="header-left">
              <div className="header1-title">
                <p>Free shipping for all products</p>
              </div>
            </div>
            <div className="header-right">
              <ul className="right-inner">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          {/* header-top section end */}

          {/* header-bottom section start */}
          <div className="header-bot">
            <div className="menu-header">
              <button id="btn" onClick={toggleSideHeader}>
                <IoMenuOutline />
              </button>
            </div>
            <div className="header-1">
              <div className="header-logo">
                <Link to="/">
                  <img
                    src="http://wp.plazathemes.com/corano/wp-content/uploads/2019/07/logo_corano.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="header-2">
              <ul className="header2-content">
                <li className="home">
                  <a href="#" className="main-a">
                    Home
                  </a>
                  <ul className="sub-ul">
                    <li>
                      <a href="#">Home shop 1</a>
                    </li>
                    <li>
                      <a href="#">Home shop 2</a>
                    </li>
                    <li>
                      <a href="#">Home shop 3</a>
                    </li>
                    <li>
                      <a href="#">Home shop 4</a>
                    </li>
                  </ul>
                </li>
                <li className="shop">
                  <a href="#" className="main-a">
                    Shop
                  </a>
                  <div className="shop-inner">
                    <ul className="sec-sub-ul">
                      <li>
                        <span>Shop Layouts</span>
                        <a href="#">Sidebar Left</a>
                        <a href="#">Sidebar Right</a>
                        <a href="#">Full Width</a>
                        <a href="#">List View</a>
                      </li>
                      <li>
                        <span>Shop Pages</span>
                        <Link to="/category">Category</Link>
                        <a href="#">My account</a>
                        <a href="#">Wishlist</a>
                        <a href="#">Cart</a>
                        <a href="#">Checkout</a>
                      </li>
                      <li>
                        <span>Product Types</span>
                        <Link to="product">Grouped Product</Link>
                        <Link to="variable">Variable Product</Link>
                        <Link to="simple">Simple Product</Link>
                        <Link to="external">External Product</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="blog">
                  <a href="#" className="main-a">
                    Blog
                  </a>
                  <div className="header-blog-sub">
                    <ul className="blog-sub-ul">
                      <li>
                        <span>Blog Layouts</span>
                        <a href="#">Sidebar Left</a>
                        <a href="#">Sidebar Right</a>
                        <a href="#">Large image</a>
                        <a href="#">Blog Grid</a>
                        <a href="#">No Sidebar</a>
                      </li>
                      <li>
                        <span>Blog Pages</span>
                        <a href="#">Author</a>
                        <a href="#">Archives</a>
                        <a href="#">Category</a>
                        <a href="#">Blog Tag</a>
                      </li>
                      <li>
                        <span>Post Formats</span>
                        <a href="#">Image Format</a>
                        <a href="#">Gallery Format</a>
                        <a href="#">Audio Format</a>
                        <a href="#">Video Format</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="page">
                  <a href="#" className="main-a">
                    Pages
                  </a>
                  <div className="page-sub">
                    <ul className="page-sub-ul">
                      <li>
                        <Link to="/frequently">Frequently Questions</Link>
                      </li>
                      <li>
                        <Link to="/privacypolicy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/error404">Error 404</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="contact" className="main-a contact-a">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-3">
              <div className="header-search">
                <input
                  type="text"
                  name=""
                  className="header-inp"
                  placeholder="Search product..."
                />
                <div className="hs-btn">
                  <button className="hs-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header-4">
              <div className="header4-inner">
                <ul className="header4-content">
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-user"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* header-bottom section end */}
        </div>
      </div>
    </>
  );
};

export default Header;
