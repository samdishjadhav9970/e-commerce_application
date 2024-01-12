import React from 'react'
import './Breadcrum.css'
import ArrowIcon from '../Assets/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product} = props
  return (
    <div className='breadcrum'>
        HOME <img src={ArrowIcon} alt="" /> SHOP <img src={ArrowIcon} alt="" /> {product.category} <img src={ArrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum