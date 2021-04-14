import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-transparent header shadow-lg'>
      <div class='container'>
        <a class='navbar-brand' href='#'>
          <img src={logo} alt='' width='60' height='50' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#about-us'>
                About Us
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='#our-work'>
                Our Work
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='#our-services'>
                Our Services
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='#our-products'>
                Our Products
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link ' href='#contact-us'>
                Contact Us
              </a>
            </li>
            <li class='nav-item'>
              <button
                class='btn btn-primary border-0 shadow-none fw-bold rounded-pill'
                href='#'
              >
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
