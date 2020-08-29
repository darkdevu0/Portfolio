import React from "react"

import "./Contact.scss"

const Contact = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                 <div className="form__group">
                   <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                   <label htmlFor="name" className="form__label">Full Name</label>
                 </div>
                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Your Email" id="email" required/>
                  <label htmlFor="email" className="form__label">Your Email</label>
                </div>
              </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
