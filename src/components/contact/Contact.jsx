import React from 'react'
import './contact.css'
import img from '../../assets/promo1.jpeg' 
  
function Contact() {
  return (
    <>
      <section id='promo' className='promo'>
          <h2 className='promo'>Try it for <strong>free</strong>!</h2>
        <p className='promo_text'> But that's not all: we will help you create a special menu for the site, tell you how to design it, and also share our experience in promotion!        </p>
        <div className="promo-block">
          <div className="promo-content">
          <ul className=' text-true'>
               <li>QR menu for viewing dishes: <strong>free</strong></li>
               <li>QR menu with ordering dishes and payment: <strong>5,000 rubles / month for 1 establishment, 2nd and subsequent - 3,000 rubles / month</strong></li>
            </ul>
            <form action="">
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" id="name" required />

              <label htmlFor="E-mail">E-mail</label>
              <input type="email" name="email" id="email" required/>

              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" placeholder='555 55 55 55' required/>

              <label className='checkbox-text'>
                <input type="checkbox" name="agreement" required  className='checkbox'/>
                  <p className='text-true'>I agree to the processing of personal data and the receipt of information and marketing communications in accordance with<strong> the terms and conditions </strong>and <strong> the Personal Data Processing Policy</strong></p>
              </label>
              <div className="form-btn">
                <button className="btn">send</button>
              </div>
            </form>
          </div>
          <div className="promo-img">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
       <section id="contact" className="section">
            <h2 data-lang-en="Contact Us" data-lang-ru="Свяжитесь с нами " className='contactus'>Contact Us</h2>
               <p data-lang-en="Reach out to us via your favorite platform:"className='contactus-text'
                   data-lang-ru="Свяжитесь с нами через вашу любимую платформу:">Reach out to us via your favorite platform:</p>
             <div className="contact-icons">
                  <a href="https://t.me/qrmenuapp" target="_blank" data-lang-en="Telegram" data-lang-ru="Телеграм">
                        <i className="fa fa-telegram"></i> Telegram
                    </a>
                   <a href="https://www.instagram.com/qrmenuapp" target="_blank" data-lang-en="Instagram" data-lang-ru="Инстаграм">
                         <i className="fa fa-instagram"></i> Instagram
                  </a>
                  <a href="https://wa.me/qrmenuapp" target="_blank" data-lang-en="WhatsApp" data-lang-ru="Вотсап">
                        <i className="fa fa-whatsapp"></i> WhatsApp
                    </a>
            </div>        
        </section>
    </>
  )
}

export default Contact