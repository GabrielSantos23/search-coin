import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/search-coin'>
      <div>
        <div className='navbar'>
          <FaCoins className='icon' />
          <h1>
            Crypto <span className='purple'>Search</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
