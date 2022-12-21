import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about' id='about'>
      <h2>
        <span>01.</span> About Me
      </h2>
      <div className='description'>
        <div className='left'>
          <h3>Who am I ?</h3>
          <p>
            Hello! My name is <span>Ismael Avotra</span>, I'm from Madagascar. I
            study in Morroco at{' '}
            <a href='https://encgt.ma' target='_blank'>
              National School of Business and Management Tangier
            </a>{' '}
            in 5th year,finance and accounting sector.
          </p>
          <p>
            I'm also a <span>Junior Frontend Web Developer</span> building the
            Front-end of Websites and Web Applications . I started learning web
            development in February 2022 with HTML, CSS and i really liked it. I
            chose to specialize in frontend. Check out some of my work in the{' '}
            <a href='/#projects'>Projects</a> section.I want to build a career
            in web development. I'm open to Job or an internship opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to contact me. I'm in Tangier but i can change city or work
            remotly.
          </p>
        </div>
        <div className='right'>
          <img src='/image.jpg' alt='photo profile' />
        </div>
      </div>
    </section>
  )
}

export default About
