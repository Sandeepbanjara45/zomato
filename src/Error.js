import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h4>Oops! Something went wrong.</h4>
      <p>We're sorry, but the page you are looking for cannot be found.</p>
      <Link to="/" className='aa'>back to home</Link>
    </div>
  );
};

export default Error;
