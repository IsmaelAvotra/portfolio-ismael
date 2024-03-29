import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'

import { MdMarkEmailUnread } from 'react-icons/md'
import { BsFillTelephoneInboundFill, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_j68lzmz',
      'template_9j44ik2',
      form.current,
      'H6Iwe94ZjHumtgq8R'
    )
    e.target.reset()
  }

  return (
    <section className='contact' id='contact'>
      <h2>
        <span>04.</span>Get in Touch
      </h2>

      <div className='contact-me'>
        <div className='content'>
          <div className='left'>
            <h3>Contact Me</h3>
            <p className='text'>
              Please don't hesitate to reach out to me if you have any job
              opportunities, questions, or suggestions. I would be more than
              happy to hear from you. You can contact me through the following
              means: LinkedIn, Twitter, Instagram or by using the contact form
              on my website. I will respond to you as soon as possible.
            </p>
            <div className='email div'>
              <MdMarkEmailUnread />
              <p>avotraismael14@gmail.com</p>
            </div>
            <div className='phone div'>
              <BsFillTelephoneInboundFill />
              <p>+212 687 77 90 91</p>
            </div>
            <div className='whatsapp div'>
              <BsWhatsapp />
              <p>+212 687 77 90 91</p>
            </div>
          </div>
          <div className='right'>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' placeholder='Name*' name='name' required />
              <input type='email' placeholder='Email*' name='email' required />
              <input type='text' placeholder='Website' name='website' />
              <textarea
                placeholder='Your message'
                cols='30'
                rows='10'
                name='message'
                required
              ></textarea>
              <button className='btn-submit' type='submit'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
