import React from 'react'
import './Footer.css'
import FooterLogo from '../Assets/logo_big.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={FooterLogo} alt="" />
            
        </div>
    </div>
  )
}

export default Footer