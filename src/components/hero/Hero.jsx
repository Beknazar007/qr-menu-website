import React, { useRef } from 'react'
import './hero.css'



function Hero() {

  return (
    <>
     <section className="hero">
      <div className="container">
         <div className="hero_contant">
          <dixv className="text">
              <h2 data-lang-en="Streamline Your Restaurant Operations" data-lang-ru="Оптимизируйте работу ресторана">Streamline Your Restaurant Operations</h2>
                 <p className='hero-text' data-lang-en="Empower your diners to browse, order, and pay effortlessly with just a scan of a QR code."
                    data-lang-ru="Позвольте вашим гостям легко просматривать меню, заказывать и оплачивать с помощью QR-кода.">
                       Empower your diners to browse, order, and pay effortlessly with just a scan of a QR code.
                </p>
          </dixv>
              <div className="hero_btn">
                <a href='#contact' data-lang-en="Get Started" data-lang-ru="Начать" className='get' >Get Started </a>
               </div>
           </div>
        </div>
     </section>
    </>
  )
}

export default Hero