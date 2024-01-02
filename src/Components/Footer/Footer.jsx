import React from 'react'
import './Footer.css'
import FooterLogo from '../Assets/logo_big.png'
import Instagram from '../Assets/instagram_icon.png'
import Pintester from '../Assets/pintester_icon.png'
import Whatsapp from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={FooterLogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={Instagram} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={Pintester} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={Whatsapp} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr/>
          <p>Copyright @ 2024 All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer