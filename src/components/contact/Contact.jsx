import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
       <section id="contact" className="section">
  <h2 data-lang-en="Contact Us" data-lang-ru="Свяжитесь с нами">Contact Us</h2>
  <p data-lang-en="Reach out to us via your favorite platform:"
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