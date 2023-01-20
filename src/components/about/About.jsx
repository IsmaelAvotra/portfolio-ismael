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
            Hello! My name is <span>Ismael Avotra</span>, and I'm from
            Madagascar. I am currently studying in my fifth year at the{' '}
            <a href='https://encgt.ma' target='_blank'>
              National School of Business and Management in Tangier, Morocco,
            </a>{' '}
            where I specialize in finance and accounting.
          </p>
          <p>
            In addition to my studies, I'm also a{' '}
            <span>Junior Frontend Web Developer</span> creating the user-facing
            aspects of websites and web applications. I began learning web
            development in February 2022, starting with HTML and CSS, and
            quickly developed a passion for it. I have chosen to specialize in
            frontend development, and you can view some of my work in the
            <a href='/#projects'>Projects</a> section.My goal is to build a
            career in web development, and I am open to job or internship
            opportunities where I can contribute, learn, and grow. If you have
            an opportunity that aligns with my skills and experience, please
            don't hesitate to contact me. I am currently located in Tangier, but
            I am open to relocating or working remotely.
          </p>
        </div>
        <div className='right'>
          <div className='image'>
            <img src='/image.jpg' alt='photo profile' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
