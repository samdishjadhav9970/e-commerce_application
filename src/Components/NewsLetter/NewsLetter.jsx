import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our Newsletter and stay updated</p>
        <div>
            <input type="email" name="" placeholder='Your Email ID' id="" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter