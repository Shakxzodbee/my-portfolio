import "./portfolio.css"
import IMG from '../../assets/img/man4.jpg'
import IMG2 from '../../assets/img/man5.jpg'
import IMG3 from '../../assets/img/man6.jpg'
import IMG4 from '../../assets/img/man7.jpg'
import IMG5 from '../../assets/img/man8.jpg'
import IMG6 from '../../assets/img/man9.jpg'
import IMG7 from '../../assets/img/man10.jpg'
import IMG8 from '../../assets/img/man11.jpg'
import IMG9 from '../../assets/img/man12.jpg'
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const data = [
  {
    id: 4,
    image: IMG8,
    title: 'Namoz',
    github: 'https://github.com/Shakxzodbee/Namoz-vaqtlari',
    demo: 'https://namoz-vaqtlari-yangi-api.netlify.app/'
  },
  {
    id: 7,
    image: IMG4,
    title: 'Midbank',
    github: 'https://github.com/Shakxzodbee/Midbank-maket-react',
    demo: 'https://vermillion-mermaid-453c8b.netlify.app/'
  },

  {
    id: 8,
    image: IMG9,
    title: 'To-Do-App',
    github: 'https://github.com/Shakxzodbee/html-css-js-folders/tree/main/to-do-app-main',
    demo: 'https://to-do-applcation.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Trustcrypt',
    github: 'https://github.com/Shakxzodbee/trustcrypt',
    demo: 'https://github.com/Shakxzodbee/trustcrypt'
  },
  {
    id: 6,
    image: IMG7,
    title: 'Paint',
    github: 'https://github.com/Shakxzodbee/paint-app',
    demo: 'https://elaborate-hotteok-73dd16.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Quiz App',
    github: 'https://github.com/Shakxzodbee/html-css-js-folders/tree/main/Quiz-app-main',
    demo: 'https://jazzy-paprenjak-0675e2.netlify.app/'
  },
  
  {
    id: 5,
    image: IMG5,
    title: 'Snake Game',
    github: 'https://github.com/Shakxzodbee/snake-game-full',
    demo: 'https://snake-gamessssssssssssssss.netlify.app/'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Calendar',
    github: 'https://github.com/Shakxzodbee/html-css-js-folders/tree/main/Calendar',
    demo: 'https://precious-macaron-c835ee.netlify.app/'
  },
  {
    id: 1,
    image: IMG,
    title: 'Text Editor',
    github: 'https://github.com/Shakxzodbee/html-css-js-folders/tree/main/text-editor-main',
    demo: 'https://text-editorpage.netlify.app/'
  },
 
]
const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section id='portfolio'>
      <h5 data-aos="fade-up" data-aos-duration="1000">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-duration="1000">Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item' data-aos="fade-up" data-aos-duration="1000">
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta" >
                  <a href={github} className='btn' target='_blank '>Git hub</a>
                  <a href={demo} className='btn btn-primary' target='_blank '>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio