import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/ingredients">Ingredients</NavLink>
    </div>
  );
};

export default navbar;