import React from 'react'
import './Footer.css'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer>
      <p>
        &copy; Copyright {date} by <span>Ismael</span> | All Rights Reserved!{' '}
      </p>
    </footer>
  )
}

export default Footer
