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
                            <h3 className="feature-title" data-lang-en="Digital QR Menu" data-lang-ru="Цифровое QR-меню">A MENU that sells</h3>
                                <p className="feature-description" data-lang-en="Replace paper menus with a seamless digital experience." data-lang-ru="Замените бумажные меню на удобный цифровой опыт.">
                                Entice your guests with colorful photos of dishes and juicy descriptions of their taste, recommend new products!
                                </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Always Updated MENU" data-lang-ru="Всегда актуальное меню"> Always updated MENU</h3>
                            <p className="feature-description" data-lang-en="Enable customers to pay securely from their devices." data-lang-ru="Позвольте клиентам безопасно оплачивать со своих устройств.">
                            No "Oh, sorry, we don't have this today"! If a dish is put on hold, the guest simply won't see it - the changes are reflected immediately in the QR menu                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Order & Pay Instantly" data-lang-ru="Заказ и оплата сразу"> Order & Pay Instantly </h3>
                            <p className="feature-description" data-lang-en="Convenience without waiting for a waiter to order or pay the bill." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                            Convenience without waiting for a waiter to order or pay the bill.
                          </p>
                        </div>   
                    </div>
                        <div className='screen'>
                                <img src={screenMenu} alt=""  className='screen_menu'/>
                        </div>
                                    <div className="featurs_block"> 
                    <div className="feature">
                            <h3 className="feature-title" data-lang-en="Digital QR Menu" data-lang-ru="Цифровое QR-меню">Save on Staff Costs</h3>
                          <p className="feature-description" data-lang-en="With ordering and payment via QR menu, the workload on waiters will be reduced and fewer employees will be required to work in the dining room"
                              data-lang-ru="Благодаря заказу и оплате через QR-меню нагрузка на официантов сократится, и меньшему количеству сотрудников придется работать в зале.">
                                With ordering and payment via QR menu, the workload on waiters will be reduced and fewer employees will be required to work in the dining room.                                </p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title" data-lang-en="Quick Start" data-lang-ru="Онлайн-оплата"> Quick Start</h3>
                            <p className="feature-description" data-lang-en="No developers needed—start right away!" data-lang-ru="Не нужны разработчики — начните уже сейчас!">
                            No developers needed—start right away! Give your guests a convenient and beautiful QR menu right now!                            </p>
                        </div>
                        {/* <div className="feature">
                            <h3 className="feature-title" data-lang-en="Order Tracking" data-lang-ru="Отслеживание заказов"> Analysis of demand for menu items                            </h3>
                            <p className="feature-description" data-lang-en="Real-time order updates for your kitchen and customers." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                            What dishes do guests look at but don't order? And which ones do they fall in love with at first sight? Connect Yandex.Metrica to dish cards and find out!
                            </p>
                        </div>    */}
                    </div>
                  
              </div>
              <div className='forfree'>
                    <h2 className="forfree_text" 
                        data-lang-en="Organize sales at every table for just 5000 som/month! The first month is free!" 
                        data-lang-ru="Организуйте продажи на каждом столе всего за 5000 com/мес! Первый месяц - бесплатно"
                        >
                        Organize sales at every table for just <strong className="price">5000 </strong> <strong>som/month!</strong>
                        The first month is - <strong>free!</strong>
                        </h2>

                       <button data-lang-en="Try for Free!" data-lang-ru="Попробуйте бесплатно!"
                        className="forfree_btn" 
                        onClick={() => document.getElementById('promo').scrollIntoView({ behavior: 'smooth' })}
                        >
                        Try for Free!
                        </button>

              </div>
        </section>
      </>       
  )
}

export default Features