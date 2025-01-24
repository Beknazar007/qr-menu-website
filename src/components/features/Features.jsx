import React from 'react'
import './features.css'
import screenMenu from '../../assets/scriin.png'
import img1 from '../../assets/product-Tablichka-menyu-na-stol-s-QR-kodom-dlya-kafe-i-restoranov-200kh250mm_8493fc06f8982adc360e52193594dcc7.ipthumb400x300prop.png'
import img2 from '../../assets/071d4e82904fda3b4ed1436734fee74a.jpg'
import img3 from '../../assets/874_900.jpg'
import img4 from '../../assets/GettyImages-1438185003-1024x683.jpg'
import img5 from '../../assets/image.webp'
import img6 from '../../assets/maxresdefault.jpg'

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
                    <div class="block-img">
                    <img src={img1} alt="/" class="imgA" />
                    <div class="feature">
                      <h3 class="feature-title" data-lang-en="A MENU that sells" data-lang-ru="МЕНЮ, которое продает">A MENU that sells</h3>
                      <p class="feature-description" data-lang-en="Entice your guests with colorful photos of dishes and juicy descriptions of their taste, recommend new products!" data-lang-ru="Увлекайте гостей красочными фотографиями блюд и сочными описаниями их вкуса, рекомендуйте новые продукты!">
                        Entice your guests with colorful photos of dishes and juicy descriptions of their taste, recommend new products!
                      </p>
                    </div>
                  </div>
                  <div className="block-img">
                    <div className="feature2 feature ">
                                    <h3 className="feature-title" data-lang-en="Always Updated MENU" data-lang-ru="Всегда обновленное МЕНЮ"> Always updated MENU</h3>
                          <p className="feature-description" data-lang-en=' No "Oh, sorry, we don`t have this today"! If a dish is put on hold, the guest simply won`t see it  - the changes are reflected immediately in the QR menu   '
                              data-lang-ru="Никаких «Ой, извините, сегодня этого нет»! Если блюдо отложено, гость его просто не увидит — изменения сразу отражаются в QR-меню">
                              No "Oh, sorry, we don't have this today"! If a dish is put on hold, the guest simply won't see it - the changes are reflected immediately in the QR menu                            </p>
                      </div>
                    <img src={img2} alt="" className='imgA img2' />
                  </div>
                  <div className="block-img">
                    <img src={img3} alt="" className='imgA' />
                    <div className="feature">
                                    <h3 className="feature-title" data-lang-en="Order & Pay Instantly" data-lang-ru="Закажите и оплатите мгновенно"> Order & Pay Instantly </h3>
                                  <p className="feature-description" data-lang-en="Convenience without waiting for a waiter to order or pay the bill."
                                      data-lang-ru="Удобство: не нужно ждать официанта, чтобы сделать заказ или оплатить счет.">
                                    Convenience without waiting for a waiter to order or pay the bill.
                                  </p>
                        </div>
                  </div>
              </div>
               
            <div className="featurs_block">
              <div className="block-img">
                          <div className="feature">
                              <h3 className="feature-title" data-lang-en="Save on Staff Costs" data-lang-ru="Экономьте на расходах на персонал">Save on Staff Costs</h3>
                            <p className="feature-description" data-lang-en="With ordering and payment via QR menu, the workload on waiters will be reduced and fewer employees will be required to work in the dining room."
                                data-lang-ru="Благодаря заказу и оплате через QR-меню нагрузка на официантов сократится, и меньшему количеству сотрудников придется работать в зале.">
                                With ordering and payment via QR menu, the workload on waiters will be reduced and fewer employees will be required to work in the dining room.                               </p>
                </div>
                <img src={img4} alt="#"  className='imgA'/>
            </div>
            <div className="block-img">
              <img src={img5} alt="" className='imgA' />
                            <div className="feature">
                                <h3 className="feature-title" data-lang-en="Quick Start" data-lang-ru="Быстрый старт"> Quick Start</h3>
                              <p className="feature-description" data-lang-en="No developers needed—start right away! Give your guests a convenient and beautiful QR menu right now!"
                                  data-lang-ru="Не нужны разработчики — начните прямо сейчас! Подарите своим гостям удобное и красивое QR-меню прямо сейчас!">
                                No developers needed—start right away! Give your guests a convenient and beautiful QR menu right now!
                              </p>
                            </div>
            </div>
            <div className="block-img">
                          <div className="feature">
                              <h3 className="feature-title" data-lang-en="Order Tracking" data-lang-ru="Отслеживание заказов"> Analysis of demand for menu items                            </h3>
                              <p className="feature-description" data-lang-en="Real-time order updates for your kitchen and customers." data-lang-ru="Обновления заказов в реальном времени для вашей кухни и клиентов.">
                              What dishes do guests look at but don't order? And which ones do they fall in love with at first sight? Connect Yandex.Metrica to dish cards and find out!
                              </p>
                          </div>    
              <img src={img6} alt="" className='imgA' />
            </div>
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