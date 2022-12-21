import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

const navbardata = [
  {
    id: 1,
    number: '01.',
    link: 'about',
  },
  {
    id: 2,
    number: '02.',
    link: 'skills',
  },
  {
    id: 3,
    number: '03.',
    link: 'projects',
  },
  {
    id: 4,
    number: '04.',
    link: 'contact',
  },
]

const navbar = () => {
  const [activeNav, setActiveNav] = useState(false)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 50) {
        setActiveNav(false)
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [])
  return (
    <section className='navbar'>
      <div className='logo'>
        <a href='/'>
          <h1>I</h1>
          <p>smael</p>
        </a>
      </div>
      <div className={activeNav ? 'links active' : 'links'}>
        <ol>
          {navbardata.map(({ id, number, link }) => {
            return (
              <li key={id}>
                <a href={`/#${link}`}>
                  <span>{number}</span>
                  {link}
                </a>
              </li>
            )
          })}
        </ol>
      </div>
      <div
        className='menu'
        onClick={() => {
          setActiveNav(!activeNav)
        }}
      >
        {activeNav ? <MdClose /> : <AiOutlineMenu />}
      </div>
    </section>
  )
}

export default navbar
