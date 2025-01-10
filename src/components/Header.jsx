import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header>
      <nav>
        <div className="navbar-container">
          <div className="navbar-left">
            <h1>Shoppy Globe</h1>
          </div>

          
          <div className="navbar-right">
            <ul>
              <li>
                <Link to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" height="30px" width="30px"></img>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" width="30px" height="30px"></img>
                   ({cartItems?.length || 0}) 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
