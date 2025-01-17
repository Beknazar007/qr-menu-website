import React, { useRef } from 'react';
import './contact.css';
import img from '../../assets/promo1.jpeg';

function Contact() {
  const formRef = useRef(null); // Reference to the form element

  const token = '7729310137:AAGO83raF_83WdeVm_vyqwBWxG4ygWhT8PU';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const chat_id = '@data_base_007';

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, email, phone } = Object.fromEntries(formData.entries());
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
        }),
      });

      if (response.ok) {
        // Display "Thank you" message
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you! Your message has been sent.';
        thankYouMessage.className = 'thank-you-message';

        // Append the thank-you message to the form container
        formRef.current.parentElement.appendChild(thankYouMessage);

        // Reset the form
        formRef.current.reset();

        // Remove the thank-you message after 3 seconds
        setTimeout(() => {
          thankYouMessage.remove();
        }, 4000);
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <section id="promo" className="promo">
      <h2 className="promo" data-lang-en="Try it for free!" data-lang-ru="Попробуйте бесплатно!"></h2>
        <p  className="promo_text" data-lang-en="But that's not all: we will help you create a special menu for the site, tell you how to design it, and also share our experience in promotion!" data-lang-ru="Но это еще не всё: мы поможем вам создать специальное меню для сайта, расскажем, как его оформить, а также поделимся своим опытом в продвижении!">
          But that's not all: we will help you create a special menu for the site, 
          tell you how to design it, and also share our experience in promotion!
        </p>
        <div className="promo-block">
          <div className="promo-content">
          <ul className="text-true">
                <li 
                  data-lang-en="QR menu for viewing dishes: free" 
                  data-lang-ru="QR-меню для просмотра блюд: бесплатно"
                >QR menu for viewing dishes: free</li>
                <li 
                  data-lang-en="QR menu with ordering dishes and payment: 5,000 som / month for 1 establishment, 2nd and subsequent - 3,000 som / month" 
                  data-lang-ru="QR-меню с заказом блюд и оплатой: 5000 сом/месяц за 1 заведение, 2-е и последующие - 3000 сом/месяц"
                >QR menu with ordering dishes and payment: 5,000 som / month for 1 establishment, 2nd and subsequent - 3,000 som / month </li>
              </ul>

            <div className="form-container">
              <form onSubmit={onSubmit} ref={formRef}>
              <label  htmlFor="name" 
                      data-lang-en="Name" 
                      data-lang-ru="Имя"
                    >
                      Name
                    </label>
                    <input  type="text" name="name" id="name" required placeholder="Асанов Асан" 
                      data-lang-en-placeholder="John Doe" 
                      data-lang-ru-placeholder="Асанов Асан" 
                    />

                    <label  htmlFor="email" 
                      data-lang-en="E-mail" 
                      data-lang-ru="Эл. почта"
                    >
                      E-mail
                    </label>
                    <input type="email" name="email" id="email" required placeholder="...@gmail.com" 
                      data-lang-en-placeholder="example@gmail.com" 
                      data-lang-ru-placeholder="...@gmail.com" 
                    />

                    <label htmlFor="phone" 
                      data-lang-en="Phone" 
                      data-lang-ru="Телефон"
                    >
                      Phone
                    </label>
                    <input   type="tel" name="phone"  id="phone"  placeholder="+996 555 55 55 55" required 
                      data-lang-en-placeholder="+1 234 567 8900" 
                      data-lang-ru-placeholder="+996 555 55 55 55" 
                    />
               <label className="checkbox-text">
                <input 
                  type="checkbox" 
                  name="agreement" 
                  required 
                  className="checkbox" 
                />
                <p 
                  className="text-true"
                  data-lang-en="I agree to the processing of personal data and the receipt of information and marketing communications in accordance with the terms and conditions and the Personal Data Processing Policy"
                  data-lang-ru="Я соглашаюсь на обработку персональных данных и получение информационных и маркетинговых материалов в соответствии с условиями и Политикой обработки персональных данных">
                   I agree to the processing of personal data and the receipt of information and marketing communications in accordance with the terms and conditions and the Personal Data Processing Policy
                </p>
              </label>
                <div className="form-btn">
                <button className="btn"  data-lang-en="Send" data-lang-ru="Отправить"> Send </button>
                  </div>
              </form>
            </div>
          </div>
          <div className="promo-img">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <h2 data-lang-en="Contact Us" data-lang-ru="Свяжитесь с нами" className="contactus">Contact Us</h2>
        <p 
          data-lang-en="Reach out to us via your favorite platform:" 
          className="contactus-text" 
          data-lang-ru="Свяжитесь с нами через вашу любимую платформу:"
        >
          Reach out to us via your favorite platform:
        </p>
        <div className="contact-icons">
          <a 
            href="https://t.me/Temiraliev_Argen" 
            target="_blank" 
            data-lang-en="Telegram" 
            data-lang-ru="Телеграм"
          >
            <i className="fa fa-telegram"></i> Telegram
          </a>
          <a 
            href="https://www.instagram.com/invites/contact/?igsh=y506cyuearhv&utm_content=pjrsn89" 
            target="_blank" 
            data-lang-en="Instagram" 
            data-lang-ru="Инстаграм"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>
          <a 
            href="https://wa.me/+996555560686" 
            target="_blank" 
            data-lang-en="WhatsApp" 
            data-lang-ru="Вотсап"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
