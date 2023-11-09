import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Dashboard from '../pages/Dashboard.js';
import About from '../pages/About.js';
import Analytics from '../pages/Analytics.js';
import Comment from '../pages/Comment.js';
import Product from '../pages/Product.js';
import ProductList from '../pages/ProductList.js';

function Main() {
  return (
    <div>
      <Sidebar>
        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes> */}
      </Sidebar>
    </div>
  );
}

export default Main;
