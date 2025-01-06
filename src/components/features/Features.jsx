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
                            <h3 className="feature-title" data-lang-en="Digital QR Menu" data-lang-ru="Цифровое QR-меню">A menu that sells</h3>
                                <p className="feature-description" data-lang-en="Replace paper menus with a seamless digital experience." data-lang-ru="Замените бумажные меню на удобный цифровой опыт.">
                                Entice your guests with colorful photos of dishes and juicy descriptions of their taste, recommend new products, set up bonuses and promotions in iikoCard!
                                </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Online Payment" data-lang-ru="Онлайн-оплата"> All dishes on the menu are always up to date</h3>
                            <p className="feature-description" data-lang-en="Enable customers to pay securely from their devices." data-lang-ru="Позвольте клиентам безопасно оплачивать со своих устройств.">
                            No "Oh, sorry, we don't have this today"! If a dish is put on hold, the guest simply won't see it - the changes are reflected immediately in the QR menu                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Order Tracking" data-lang-ru="Отслеживание заказов"> There is no need to wait for anyone </h3>
                            <p className="feature-description" data-lang-en="Real-time order updates for your kitchen and customers." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                            If a guest wants to order something more, he doesn't need to look for a waiter, he can do it right away via the QR menu. The same applies to payment                          </p>
                        </div>   
                    </div>
                        <div className='screen'>
                                <img src={screenMenu} alt=""  className='screen_menu'/>
                        </div>
                                    <div className="featurs_block"> 
                    <div className="feature">
                            <h3 className="feature-title" data-lang-en="Digital QR Menu" data-lang-ru="Цифровое QR-меню">Payroll can be reduced</h3>
                                <p className="feature-description" data-lang-en="Replace paper menus with a seamless digital experience." data-lang-ru="Замените бумажные меню на удобный цифровой опыт.">
                                With ordering and payment via QR menu, the workload on waiters will be reduced and fewer employees will be required to work in the dining room.                                </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Online Payment" data-lang-ru="Онлайн-оплата"> Can be turned on quickly</h3>
                            <p className="feature-description" data-lang-en="Enable customers to pay securely from their devices." data-lang-ru="Позвольте клиентам безопасно оплачивать со своих устройств.">
                            Everything you need is already in iiko - no need to look for developers and wait! Give your guests a convenient and beautiful QR menu right now!                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Order Tracking" data-lang-ru="Отслеживание заказов"> Analysis of demand for menu items                            </h3>
                            <p className="feature-description" data-lang-en="Real-time order updates for your kitchen and customers." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                            What dishes do guests look at but don't order? And which ones do they fall in love with at first sight? Connect Yandex.Metrica to dish cards and find out!
                            </p>
                        </div>   
                    </div>
                  
              </div>
              <div className='forfree'>
                  <h2 className='forfree_text'>Организуйте продажи на каждом столе всего за <strong className='price'>5000 р/мес!</strong> 
                       Первый месяц - <strong>бесплатно</strong> </h2>
                  <button  className="forfree_btn">Попробать бесплатно</button>
              </div>
        </section>
      </>       
  )
}

export default Features