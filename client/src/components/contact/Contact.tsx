import { FacebookLogo, GoogleLogo, InstagramLogo, PinterestLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>Be in touch with us:</span>
        <div className="mail">
          <input type="text" placeholder='Enter your e-mail...' />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <FacebookLogo size={26} weight='fill' />
          <InstagramLogo size={26} weight='fill' />
          <TwitterLogo size={26} weight='fill' />
          <GoogleLogo size={26} weight='fill' />
          <PinterestLogo size={26} weight='fill' />
        </div>
      </div>
    </div>
  )
}

export default Contact