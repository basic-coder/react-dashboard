import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <span>Admin</span>
        <span> <FaRegCopyright /> Copyright Reserved</span>
    </div>
  )
}

export default Footer