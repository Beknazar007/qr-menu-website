import React from 'react'
import './header.css'

function Header() {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header_content">
              <div className='logo'>
                  <h1 className=''>QR Menu  </h1>
              </div>
              <nav className='nav'>
                  <a href="#features" data-lang-en="Features" data-lang-ru="Функции">Features</a>
                  <a href="#testimonials" data-lang-en="Testimonials" data-lang-ru="Отзывы">free</a>
                  <a href="#contact" data-lang-en="Contact Us" data-lang-ru="Свяжитесь с нами">Contact Us</a>
              </nav>
              <div className="menu_icon">
              &#9776;
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header