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
              <span>-</span> REACT <SiReact />
            </li>
            <li>
              <span>-</span> Next <SiNextdotjs />
            </li>
            <li>
              <span>-</span> TAILWIND <SiTailwindcss />
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
                Teamwork is the foundation for the success of any project, but
                each member must also be self-sufficient to avoid delaying
                progress. As an autodidact, self-sufficiency is a must for me. I
                understand the importance of being able to work independently as
                well as being a valuable team member, contributing to the
                success of the project.
              </p>
            </li>
            <li>
              <span>-</span>
              Team Work :
              <p>
                As a student in the school of management, I am well-versed in
                the importance of teamwork and have had the opportunity to work
                in a team environment during my internship. I understand the
                value of collaboration and communication in achieving success,
                and I am confident in my ability to effectively contribute to
                any team I am a part of.
              </p>
            </li>
            <li>
              <span>-</span>
              Creativity :
              <p>
                Web development allows me to tap into my creativity. I am
                inspired by the work of other developers and designers, and use
                that inspiration in my own designs and functionality. I am
                constantly using my imagination to find new and innovative
                solutions to problems and enhance the user experience.
              </p>
            </li>
          </div>

          <div className='right'>
            <li>
              <span>-</span>
              Adaptability :
              <p>
                In web development, adaptability is key as technologies are
                constantly evolving. I have a strong foundation in Javascript
                and am open to learning new frameworks, even though I
                particularly enjoy using React and Next. I understand the
                importance of staying current and am always eager to learn and
                improve my skills.
              </p>
            </li>
            <li>
              <span>-</span>
              Problem-Solving Attitude :
              <p>
                As a self-taught developer, I am accustomed to finding solutions
                to problems through research, asking for help from other
                developers, or watching educational videos on YouTube. I possess
                a strong problem-solving ability and the ability to be
                self-sufficient, but I do not hesitate to reach out to more
                experienced individuals for guidance when needed.
              </p>
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
