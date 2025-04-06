import React from 'react'
import Types from './Home/Types'
import Service from './Home/Service'
import Banner from './Home/Banner'
import Brands from './Home/Brands'
import Blog from './Home/Blog'
import Client from './Home/Client'
import Ring from './Home/Ring'
import Arrival from './Home/Arrival'
import Item from './Home/Item'
import Product from './Home/Product'

const Home = () => {
  return (
    <>
      <Banner/>
      <Service/>
      <Types/>
      <Arrival/>
      <Item/>
      <Product/>
      <Client/>
      <Ring/>
      <Blog/>
      <Brands/>
    </>
  )
}

export default Home
