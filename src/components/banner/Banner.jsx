import React from 'react'
import './Banner.css'

import TextSpan from './TextSpan'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai'

const sentence1 = 'Hi,'.split('')
const sentence2 = "I'm Ismael,".split('')
const sentence3 = 'Junior Web Developer'.split('')

const Banner = () => {
  return (
    <section className='banner'>
      <div className='text-h1'>
        <div className='text1-h1' data-aos='fade-up' data-aos-delay='400'>
          {sentence1.map((letter, index) => {
            return (
              <TextSpan key={index} className='hi'>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>

        <div className='text2-h1' data-aos='fade-up' data-aos-delay='500'>
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
        <div className='text3-h1' data-aos='fade-up' data-aos-delay='600'>
          {sentence3.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
        <div className='button' data-aos='fade-up' data-aos-delay='700'>
          <button>
            <a href='/#contact'>Contact me!</a>
          </button>
        </div>
      </div>
      <div className='socials' data-aos='fade-up' data-aos-delay='800'>
        <a href='https://github.com/IsmaelAvotra' target='_blank'>
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/ismael-avotra-22546b168/'
          target='_blank'
        >
          <AiFillLinkedin />
        </a>
        <a href='https://twitter.com/AvotraIsmael' target='_blank'>
          <AiOutlineTwitter />
        </a>
        <a href='https://www.instagram.com/ismaelavotra/' target='_blank'>
          <AiOutlineInstagram />
        </a>
      </div>
    </section>
  )
}

export default Banner
