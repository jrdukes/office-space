import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <Link to={'/'} className='navbar-brand'>
          Lease Your Office Space
        </Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>
                Current Listings
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/create'} className='nav-link'>
                Add Listing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
