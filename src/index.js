import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './Contact/Contact';
import Grouped from './Products/Grouped';
import Variable from './Products/Variable';
import Simple from './Products/Simple';
import External from './Products/External';
import Arrivaldetail from './Products/arrivalproduct/Arrivaldetail';
import Productdetail from './Products/ourproduct/Productdetail';
import Ringproduct from './Products/ringproduct/Ringproduct';
import Ringproright from './Products/ringproduct/Ringproright';
import Frequently from './pages/Frequently';
import Error404 from './pages/Error404';
import Privactpolicy from './pages/Privactpolicy';
import Category from './shoppages/Category';
import Wishlist from './shoppages/Wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="product" element={<Grouped />} />
                        <Route path="variable" element={<Variable />} />
                        <Route path="simple" element={<Simple />} />
                        <Route path="external" element={<External />} />
                        <Route path="category" element={<Category />} />
                        <Route path="/arrival/:id" element={<Arrivaldetail />} />
                        <Route path="/product/:id" element={<Productdetail />} />   
                        <Route path="/ring1/:id" element={<Ringproduct />} />  
                        <Route path="/ring2/:id" element={< Ringproright/>} />  
                        <Route path="/frequently" element={< Frequently/>} />  
                        <Route path="/error404" element={< Error404/>} />  
                        <Route path="/privacypolicy" element={< Privactpolicy/>} />  
                        <Route path="/wishlist" element={< Wishlist/>} />  

                  </Routes>
                  <Footer />
            </BrowserRouter>
      </>
);
