import React from 'react'
import './features.css'
import screenMenu from '../../assets/scriin.png'

function Features() {
  return (
      <>
        <section id="features" className="section">
            <div className="section-header">
                <h2 className="solution-title" data-lang-en="Digital Solutions for Your Restaurant." data-lang-ru="Цифровые решения для вашего ресторана.">  Digital Solutions for Your Restaurant. </h2>
                    <p className="solution-text" data-lang-en="Enhance your restaurant's operations with a digital QR menu, online payment, and order tracking. Choose the plan that fits your needs!"
                        data-lang-ru="Улучшите работу вашего ресторана с помощью цифрового QR-меню, онлайн-оплаты и отслеживания заказов. Выберите подходящий план!">
                        Enhance your restaurant's operations with a digital QR menu, online payment, and order tracking. Choose the plan that fits your needs!
                    </p>
             </div>
              <div className="features">
                  <div className="featurs_block"> 
                    <div className="feature">
                            <h3 className="feature-title" data-lang-en="Digital QR Menu" data-lang-ru="Цифровое QR-меню">Digital QR Menu</h3>
                                <p className="feature-description" data-lang-en="Replace paper menus with a seamless digital experience." data-lang-ru="Замените бумажные меню на удобный цифровой опыт.">
                                    Replace paper menus with a seamless digital experience.
                                </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Online Payment" data-lang-ru="Онлайн-оплата"> Online Payment</h3>
                            <p className="feature-description" data-lang-en="Enable customers to pay securely from their devices." data-lang-ru="Позвольте клиентам безопасно оплачивать со своих устройств.">
                                Enable customers to pay securely from their devices.
                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Order Tracking" data-lang-ru="Отслеживание заказов"> Order Tracking </h3>
                            <p className="feature-description" data-lang-en="Real-time order updates for your kitchen and customers." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                                Real-time order updates for your kitchen and customers.
                            </p>
                        </div>   
                    </div>
                        <div className='screen'>
                                <img src={screenMenu} alt=""  className='screen_menu'/>
                        </div>
                        {/* <div className="pricing">
                                    <div className="plan">
                                        <h3 className="plan-title" data-lang-en="Basic" data-lang-ru="Базовый">Basic</h3>
                                            <ul className="plan-features">
                                                <li data-lang-en="Access to basic features" data-lang-ru="Доступ к базовым функциям">Access to basic features</li>
                                                <li data-lang-en="Single QR Menu" data-lang-ru="Одно QR-меню">Single QR Menu</li>
                                            </ul>
                                    </div>
                                    <div className="plan popular">
                                        <h3 className="plan-title" data-lang-en="Pro" data-lang-ru="Про">Pro</h3>
                                            <ul className="plan-features">
                                                <li data-lang-en="Access to all features" data-lang-ru="Доступ ко всем функциям">Access to all features</li>
                                                <li data-lang-en="Multiple QR Menus" data-lang-ru="Несколько QR-меню">Multiple QR Menus</li>
                                                <li data-lang-en="Priority Support" data-lang-ru="Приоритетная поддержка">Priority Support</li>
                                            </ul>
                                    </div>
                                    <div className="plan">
                                        <h3 className="plan-title" data-lang-en="Enterprise" data-lang-ru="Корпоративный">Enterprise</h3>
                                            <ul className="plan-features">
                                            <li data-lang-en="Custom QR Menu Solutions" data-lang-ru="Индивидуальные решения для QR-меню">Custom QR Menu Solutions</li>
                                            <li data-lang-en="Dedicated Support" data-lang-ru="Выделенная поддержка">Dedicated Support</li>
                                            <li data-lang-en="Enterprise Analytics" data-lang-ru="Корпоративная аналитика">Enterprise Analytics</li>
                                            </ul>
                                    </div>
                          </div> */}
                                    <div className="featurs_block"> 
                    <div className="feature">
                            <h3 className="feature-title" data-lang-en="Digital QR Menu" data-lang-ru="Цифровое QR-меню">Basic</h3>
                                <p className="feature-description" data-lang-en="Replace paper menus with a seamless digital experience." data-lang-ru="Замените бумажные меню на удобный цифровой опыт.">
                                Access to basic features Single QR Menu
                                </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Online Payment" data-lang-ru="Онлайн-оплата"> Pro</h3>
                            <p className="feature-description" data-lang-en="Enable customers to pay securely from their devices." data-lang-ru="Позвольте клиентам безопасно оплачивать со своих устройств.">
                            Access to all features Multiple QR Menus Enterprise Analytics
                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Order Tracking" data-lang-ru="Отслеживание заказов"> Enterprise </h3>
                            <p className="feature-description" data-lang-en="Real-time order updates for your kitchen and customers." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                            Custom QR Menu Solutions Dedicated Support Enterprise Analytics
                            </p>
                        </div>   
                    </div>
                  
              </div>
              <div className='forfree'>
                  <h2 className='forfree_text'>Организуйте продажи на каждом столе всего за 5000 р/мес!
                       Первый месяц - бесплатно</h2>
                  <button  className="forfree_btn">Попробать бесплатно</button>
              </div>
        </section>
      </>       
  )
}

export default Features