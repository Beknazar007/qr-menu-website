import React from 'react'
import './testimonial.css' 

function Testimonial() {
  return (
    <>
      <section id="testimonials" className="section">
        <h2 className="section-title" data-lang-en="What Our Clients Say" data-lang-ru="Отзывы наших клиентов">There is a free version!</h2>
        <p className="sectionn-text" data-lang-en="This app transformed our restaurant operations! Highly recommend." data-lang-ru="Это приложение преобразило нашу работу в ресторане! Настоятельно рекомендую.">
             Still not sure? Try the free version - the same colorful and tempting menu, but without the ability to order and pay! If you and your guests like it, you'll switch to a subscription
        </p>
        <div className="testimonials">
          <div className="testimonial">
          <h2 className="testimonial-name" data-lang-en="Attract more new guests" data-lang-ru="Привлекайте больше новых гостей">Attract more new guests</h2>
          <p className="testimonial-text" data-lang-en="This app transformed our restaurant operations! Highly recommend." data-lang-ru="Это приложение преобразило нашу работу в ресторане! Настоятельно рекомендую.">
                A free QR menu also sells! Place a link to it in advertising and social networks so that guests can evaluate the appeal of your dishes and decide to visit the restaurant
                </p>
          </div>
          <div className="testimonial">
          <h2 className="testimonial-name" data-lang-en="Replace the outdated pdf on the site" data-lang-ru="Замените устаревший PDF на сайте">Replace the outdated pdf on the site</h2>
          <p className="testimonial-text" data-lang-en="This app transformed our restaurant operations! Highly recommend." data-lang-ru="Это приложение преобразило нашу работу в ресторане! Настоятельно рекомендую.">
                From QR-MENU you can deploy your own website with the ability to order for delivery and pickup. But if you don’t need it now, and you already have a website, place a link to the QR menu on it so that there is always up-to-date information
                </p>
          </div>
          <div className="testimonial">
          <h2 className="testimonial-name" data-lang-en="Test hypotheses and measure results" data-lang-ru="Тестируйте гипотезы и измеряйте результаты">Test hypotheses and measure results</h2>
          <p className="testimonial-text" data-lang-en="This app transformed our restaurant operations! Highly recommend." data-lang-ru="Это приложение преобразило нашу работу в ресторане! Настоятельно рекомендую.">
                Yandex.Metrica counters work in the free version of the site too! Connect the free version immediately after opening and study the details of the behavior and preferences of guests. And then turn on the subscription :)
                </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial