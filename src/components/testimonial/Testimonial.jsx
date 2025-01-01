import React from 'react'
import './testimonial.css' 

function Testimonial() {
  return (
    <>
      <section id="testimonials" className="section">
        <h2 className="section-title" data-lang-en="What Our Clients Say" data-lang-ru="Отзывы наших клиентов">What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p className="testimonial-text" data-lang-en="This app transformed our restaurant operations! Highly recommend." data-lang-ru="Это приложение преобразило нашу работу в ресторане! Настоятельно рекомендую.">
              This app transformed our restaurant operations! Highly recommend.
            </p>
            <div className="testimonial-author">
              <img src="https://e7.pngegg.com/pngimages/86/519/png-clipart-computer-icons-person-blog-person-icon-rectangle-logo.png" alt="Client 1" className="testimonial-avatar" />
              <span className="author-name">John Doe</span>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text" data-lang-en="Easy to use and our customers love it!" data-lang-ru="Просто в использовании, и нашим клиентам это нравится!">
              Easy to use and our customers love it!
            </p>
            <div className="testimonial-author">
              <img src="https://e7.pngegg.com/pngimages/86/519/png-clipart-computer-icons-person-blog-person-icon-rectangle-logo.png" alt="Client 2" className="testimonial-avatar" />
              <span className="author-name">Jane Smith</span>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text" data-lang-en="Easy to use and our customers love it!" data-lang-ru="Просто в использовании, и нашим клиентам это нравится!">
              Easy to use and our customers love it!
            </p>
            <div className="testimonial-author">
              <img src="https://e7.pngegg.com/pngimages/86/519/png-clipart-computer-icons-person-blog-person-icon-rectangle-logo.png" alt="Client 2" className="testimonial-avatar" />
              <span className="author-name">Jane Smith</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial