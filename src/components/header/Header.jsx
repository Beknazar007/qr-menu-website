import React, { useState, useRef, useEffect } from 'react';
import './header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null); 
  const buttonRef = useRef(null); 

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };
  const handleScroll = () => {
    closeMenu(); 
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
     window.addEventListener('scroll' , handleScroll)
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll)
    };
  }, []);


  const [language, setLanguage] = useState('ru'); // Язык по умолчанию

  const changeLanguage = (lang) => {
    setLanguage(lang); // Устанавливаем язык
  };

  useEffect(() => {
    // Обновляем текст всех элементов с атрибутами data-lang-en и data-lang-ru
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    elements.forEach((element) => {
      const text = element.getAttribute(`data-lang-${language}`);
      if (text) {
        element.innerHTML = text; // Устанавливаем текст в зависимости от языка
      }
    });
  }, [language]);


  


  return (
    <div className="header">
      <div className="container">
        <div className="header_content">
          <div className="logo">
            <h1>QR Menu</h1>
          </div>
          <nav ref={menuRef} className={`nav ${menuActive ? 'active' : ''}`}>
          <a href="#features" data-lang-en="Features" data-lang-ru="Функции">
              Features
            </a>
            <a href="#testimonials" data-lang-en="Testimonials" data-lang-ru="Отзывы">
              Free
            </a>
            <a href="#contact" data-lang-en="Contact Us" data-lang-ru="Свяжитесь с нами">
              Contact Us
            </a>
          </nav>
          <div className='icon-translate'>

            <div className="translate">
            <div className={`icon rus ${language === 'ru' ? 'active' : ''}`} onClick={() => changeLanguage('ru')} >
              {language === 'ru' ? 'RUS 🇷🇺' : 'RUS🇷🇺'}</div>
  
            <div className={`icon usa ${language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>
                 {language === 'en' ? 'ENG 🇺🇸' : 'ENG🇺🇸'} </div>
            </div>
             <div
            ref={buttonRef}
            className={`menu_icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu} >
            &#9776;
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
