import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Cart from './pages/Cart';
import Error from './Error';
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
