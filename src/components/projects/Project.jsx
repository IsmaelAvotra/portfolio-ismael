import React from 'react'
import './Project.css'

import { projects } from './data'

import { AiFillGithub } from 'react-icons/ai'
import { SiNetlify, SiVercel } from 'react-icons/si'

const Project = () => {
  return (
    <section className='projects' id='projects'>
      <h2>
        <span>03.</span> My Projects
      </h2>
      <div className='content'>
        {projects.map((project) => {
          const { id, image, name, technos, desription, github, demo, icon } =
            project
          return (
            <article className='project' key={id}>
              <img src={image} alt={name} />

              <div className='info'>
                <p>
                  <span>Name:</span> {name}
                </p>
                <p>
                  <span>Technos:</span> {technos}
                </p>
                <p>
                  <span>Description:</span> {desription}
                </p>
              </div>
              <div className='links'>
                <div className='repo'>
                  <a href={github} target='_blank'>
                    <AiFillGithub />
                    <p>Repo</p>
                  </a>
                </div>
                <div className='demo'>
                  <a href={demo} target='_blank'>
                    {icon === 'vercel' ? <SiVercel /> : <SiNetlify />}
                    <p> Demo</p>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Project
