import React from 'react'
import './Skills.css'

// import icons
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiVisualstudiocode,
  SiNpm,
  SiVite,
} from 'react-icons/si'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h2>
        <span>02.</span> My Skills
      </h2>
      <div className='tech-skills'>
        <h3>Technical Skills</h3>
        <div className='tech'>
          <div className='front-end'>
            <h4>Front End :</h4>
            <li>
              <span>-</span> HTML5 <AiFillHtml5 />
            </li>
            <li>
              <span>-</span> CSS <FaCss3Alt />
            </li>
            <li>
              <span>-</span> JAVASCRIPT <SiJavascript />
            </li>
            <li>
              <span>-</span> TYPESCRIPT <SiTypescript />
            </li>
          </div>
          <div className='framework'>
            <h4>Framework :</h4>
            <li>
              <span>-</span> TAILWIND <SiTailwindcss />
            </li>
            <li>
              <span>-</span> REACT <SiReact />
            </li>
            <li>
              <span>-</span> Next <SiNextdotjs />
            </li>
            <li>
              <span>-</span> ASTRO JS
            </li>
          </div>
          <div className='back-end'>
            <h4>Back End :</h4>
            <li>
              <span>-</span> NODE <SiNodedotjs />
            </li>
            <li>
              <span>-</span> EXPRESS <SiExpress />
            </li>
          </div>
          <div className='tools'>
            <h4>Tools :</h4>
            <li>
              <span>-</span> VS CODE <SiVisualstudiocode />
            </li>
            <li>
              <span>-</span> GIT <FaGitAlt />
            </li>
            <li>
              <span>-</span> NPM <SiNpm />
            </li>
            <li>
              <span>-</span> VITE <SiVite />
            </li>
          </div>
        </div>
      </div>

      <div className='soft-skills'>
        <h3>Soft Skills</h3>
        <div className='content'>
          <div className='left'>
            <li>
              <span>-</span>
              Autonomy :
              <p>
                Team work is the basis for the success of a project, but each
                member must also be autonomous so as not to delay the progress
                of the project. As I am an autodidact, autonomy is an obligation
                for me.
              </p>
            </li>
            <li>
              <span>-</span>
              Team Work :
              <p>
                Being a student of the school of management, I am aware of the
                importance of teamwork and I had the opportunity to work in a
                team during my internship.
              </p>
            </li>
            <li>
              <span>-</span>
              Creativity :
              <p>
                With web development, I feel creative. I can draw inspiration
                from the work of other creators for my designs and
                functionality.I always have to use my creativity to find the
                best way to solve a problem or for the user experience.
              </p>
            </li>
          </div>

          <div className='right'>
            <li>
              <span>-</span>
              Adaptability :
              <p>
                In web development, you need a good ability to adapt since
                technologies are constantly evolving. I have a solid foundation
                in Javascript I don't mind learning a new framework even though
                I love React and Next.
              </p>
            </li>
            <li>
              <span>-</span>
              Problem-Solving Attitude :
              <p>
                Being self-taught I have to find a solution if I had a problem
                by doing research or asking questions in a group of developers
                or watching videos on youtube. I have this ability to solve
                problems by myself but I also do not hesitate to ask for help
                from more experienced people
              </p>
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
