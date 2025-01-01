import React from 'react'
import './pricing.css'

function Pricing() {
  return (
    <>
     <section id="pricing" className="section">
         <h2 className="section-title" data-lang-en="Pricing" data-lang-ru="Цены">Pricing</h2>
      <div className="pricing">
        <div className="plan">
            <h3 className="plan-title" data-lang-en="Basic" data-lang-ru="Базовый">Basic</h3>
               <p className="plan-price" data-lang-en="$9.99/month" data-lang-ru="9.99$/месяц">$9.99/month</p>
                <ul className="plan-features">
                    <li data-lang-en="Access to basic features" data-lang-ru="Доступ к базовым функциям">Access to basic features</li>
                    <li data-lang-en="Single QR Menu" data-lang-ru="Одно QR-меню">Single QR Menu</li>
                </ul>
            <button className="plan-button" data-lang-en="Subscribe" data-lang-ru="Подписаться">Subscribe</button>
        </div>
        <div className="plan popular">
          <span className="badge" data-lang-en="Most Popular" data-lang-ru="Самый популярный">Most Popular</span>
            <h3 className="plan-title" data-lang-en="Pro" data-lang-ru="Про">Pro</h3>
                  <p className="plan-price" data-lang-en="$19.99/month" data-lang-ru="19.99$/месяц">$19.99/month</p>
                  <ul className="plan-features">
                      <li data-lang-en="Access to all features" data-lang-ru="Доступ ко всем функциям">Access to all features</li>
                      <li data-lang-en="Multiple QR Menus" data-lang-ru="Несколько QR-меню">Multiple QR Menus</li>
                      <li data-lang-en="Priority Support" data-lang-ru="Приоритетная поддержка">Priority Support</li>
                  </ul>
            <button className="plan-button" data-lang-en="Subscribe" data-lang-ru="Подписаться">Subscribe</button>
        </div>
        <div className="plan">
            <h3 className="plan-title" data-lang-en="Enterprise" data-lang-ru="Корпоративный">Enterprise</h3>
                <p className="plan-price" data-lang-en="Contact us for pricing" data-lang-ru="Свяжитесь с нами для уточнения цены">Contact us for pricing</p>
                <ul className="plan-features">
                  <li data-lang-en="Custom QR Menu Solutions" data-lang-ru="Индивидуальные решения для QR-меню">Custom QR Menu Solutions</li>
                  <li data-lang-en="Dedicated Support" data-lang-ru="Выделенная поддержка">Dedicated Support</li>
                  <li data-lang-en="Enterprise Analytics" data-lang-ru="Корпоративная аналитика">Enterprise Analytics</li>
                </ul>
            <button className="plan-button" data-lang-en="Contact" data-lang-ru="Связаться">Contact</button>
        </div>
  </div>
</section>

    </>
  )
}

export default Pricing