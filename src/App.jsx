import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({email1: "", email2: ""})
  const [formErrors, setFormErrors] = useState({email1: null, email2: null})

  function handleChange(e){
    setFormErrors(prev => ({...prev,  [e.target.name]: null}))
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    if(!formData[e.target.name].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
      return setFormErrors(prev => ({...prev, [e.target.name]: "Please check your email"}))
  }
  return (
    <>
      <main>
        <section className="nav">
          <img className="logo" src="/images/logo.svg" />
          <div className="nav-items">
            <a>Features</a>
            <a>Team</a>
            <a>Sign In</a>
          </div>
        </section>
        <section className="header">
          <div className="header-content">
            <h1 className="header-title">All your files in one secure location, accessible anywhere.</h1>
            <p className="header-text">
              Fylo stores your most important files in one secure location. 
              Access them wherever you need, share and collaborate with friends, 
              family, and co-workers.
            </p>
            <div className="header-input-container">
              <div className='header-input-wrapper'>
                <input 
                  className="header-input" 
                  type="text" 
                  placeholder="Enter your email..." 
                  name='email1' 
                  onChange={handleChange} 
                  value={formData.email1}
                />
                {formErrors.email1 && <p className='error'>{formErrors.email1}</p>}
              </div>
              <button className="header-btn" name='email1' onClick={handleSubmit}>Get Started</button>
            </div>
          </div>
          <img className="header-img" src="/images/illustration-1.svg" />
        </section>
        <section className="productive-section">
          <div className="productive-content">
            <h1 className="productive-title">Stay productive, wherever you are</h1>
            <p className="productive-text">
              Never let location be an issue when accessing your files. Fylo has you 
              covered for all of your file storage needs.
            </p>
            <p className="productive-text">
              Securely share files and folders with friends, family and colleagues for 
              live collaboration. No email attachments required!
            </p>
            <div className="productive-link">
              <p>See how Fylo works</p>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>
            <div className="testimonial"> 
              <img className="testimonial-img" src="/images/icon-quotes.svg" />  
              <p className="testimonial-text">
                Fylo has improved our team productivity by an order of magnitude. Since 
                making the switch our team has become a well-oiled collaboration machine.
              </p>
              <div className="testimonial-cred">
                <img className="testimonial-avatar" src="/images/avatar-testimonial.jpg" />
                <div className="testimonial-info">
                  <p className="testimonial-name">Kyle Burton</p>
                  <p className="testimonial-ocuppation">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <img className="productive-img" src="/images/illustration-2.svg" />
        </section>
      </main>
      <section className="bottom-section">
        <div className="bottom-content">
          <h1 className="bottom-title">Get early access today</h1>
          <p className="bottom-text">
            It only takes a minute to sign up and our free starter tier is extremely generous. 
            If you have any questions, our support team would be happy to help you.
          </p>
        </div>
        <div className="bottom-input-container">
          <div className='bottom-input-wrapper'>
            <input 
              className="bottom-input" 
              type="text" 
              placeholder="email@example.com" 
              name='email2'
              onChange={handleChange}
              value={formData.email2}
            />
            {formErrors.email2 && <p className='error'>{formErrors.email2}</p>}
          </div>
          <button className="bottom-btn" name='email2' onClick={handleSubmit}>Get Started For Free</button>
        </div>
      </section>
      <footer>
        <img className="footer-logo" src="/images/logo.svg" />
        <div className="footer-content">
          <div className="contacts">
            <div className="contacts-item">
              <img className="contacts-phone-icon" src="/images/icon-phone.svg" />
              <p className="contacts-phone-text">Phone: +1-543-123-4567</p>
            </div>
            <div className="contacts-item">
              <img className="contacts-email-icon" src="/images/icon-email.svg" />
              <p className="contacts-email-text">example@fylo.com</p>
            </div>
          </div>
          <div className="links">
            <div className="links-items">
              <a>About Us</a>
              <a>Jobs</a>
              <a>Press</a>
              <a>Blog</a>
            </div>
            <div className="links-items">
              <a>Contact Us</a>
              <a>Terms</a>
              <a>Privacy</a>
            </div>
          </div>
          <div className="socials">
            <div className="social-container">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social-container">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="social-container">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
        </p>
      </footer>
    </>
  )
}

export default App
