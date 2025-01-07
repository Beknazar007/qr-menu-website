import React, { useRef } from 'react'
import './hero.css'



function Hero() {

  return (
    <>
     <section className="hero">
      <div className="container">
         <div className="hero_contant">
          <dixv className="text">
              <h2 data-lang-en="Optimize Your Restaurant Operations" data-lang-ru="Оптимизируйте работу вашего ресторана">Streamline Your Restaurant Operations</h2>
                 <p className='hero-text' data-lang-en="Allow your customers to easily browse, order, and pay orders by simply scanning a QR code."
                    data-lang-ru="Позвольте своим посетителям  легко просматривать, заказывать и оплачивать заказы, просто отсканировав QR-код.">
                       Allow your customers to easily browse, order, and pay orders by simply scanning a QR code.
                </p>
          </dixv>
              <div className="hero_btn">
                <button data-lang-en="Try for Free!" data-lang-ru="Попробуйте бесплатно!"
                  className="forfree_btn" 
                  onClick={() => document.getElementById('promo').scrollIntoView({ behavior: 'smooth' })}
                  >
                  Try for Free!
                  </button>

                 </div>
           </div>
        </div>
     </section>
    </>
  )
}

export default Hero