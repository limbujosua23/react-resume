import React from 'react'

function Resume() {
  return (
    <section id="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>
      <div className="nine columns main-col" data-aos="fade-down" data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="1000">
        <div className="row item">
          <div className="twelve columns">
            <h3>Klabat University</h3>
            <p className="info">Computer Science <span>•</span> <em className="date">August 2020</em></p>
            <p>
            Klabat University, abbreviated as Unklab , is a private tertiary institution founded, fostered, and supervised by 
            the Indonesian East Union Seventh-day Adventist Church through the Klabat University Foundation. When it was founded 
            on October 7, 1965 , Unklab had the status of a university with the name College Klabat which had a major in Theology
            and Education with a two-year study program. The 4-year program (BA) with a 2-year major in Economics and Office Administration opened in 1970. The following year the status was changed from college to high school. The Faculty of Agriculture with the Bachelor's degree in Agricultural Cultivation majored in the expansion of Unklab in 1981 
            </p>
          </div>
        </div> 
        <div className="row item">
          <div className="twelve columns">
            <h3>Toraja View Academy</h3>
            <p className="info">Natural Sciences Major <span>•</span> <em className="date">June 2017</em></p>
            <p>
            Toraja View Academy is an educational unit with a high school level in MEBALI KELURAHAN, 
            Kec. Gandangbatu Sillanan, Kab. Tana Toraja, South Sulawesi. In carrying out its activities, 
            Toraja View Academy is under the auspices of the Ministry of Education and Culture.
            </p>
          </div>
        </div>
      </div> 
    </div> 

    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col" data-aos="fade-down" data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="1000">
        <div className="row item">
          <div className="twelve columns">
            <h3>Voice of Computer Science</h3>
            <p className="info">Multimedia <span>•</span> <em className="date">January 2022 - Present</em></p>
            <p>
            I started to enter the Voice of Computer Science to gain experience as well as seek relationships with other 
            people. I entered the Voice of Computer Science and applied as a Multimedia because I happen to like editing 
            and at the same time hone my skills in that field.
            </p>
          </div>
        </div> 
        <div className="row item">
          <div className="twelve columns">
            <h3>Fiverr</h3>
            <p className="info">Freelancer <span>•</span> <em className="date">March 2019 - February 2020</em></p>
            <p>
            Fiverr is an online marketplace for freelance services with low-cost providers from around the world. The idea behind Fiverr is to simplify the process of hiring and being hired as a freelancer. 
            This online marketplace does not use intermediaries in the recruitment process, termination of contracts, to matters relating to the personnel department. A relatively small business will be able to get things done much faster. 
            Meanwhile, freelancers have the freedom to sell their services at any time and to any company. Generally, this platform is used by freelancers to offer their digital services to clients globally.
            The way Fiverr works is by allowing buyers or clients to pay in advance for the “ gig ” or freelance services they want. At the start, all gigs  were priced at five dollars, now freelancers can charge more and offer packages of services.
            Usually, orders will be completed within a day or two, but delivery times are determined by the seller and can take longer if the seller has a queue of orders. 
            When you have completed the order, you as the seller will receive 80% of the total order value. For example, you will receive eight dollars  for a ten dollar gig  .
            </p>
          </div>
        </div> 
      </div>
    </div> 
  
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col" data-aos="fade-down" data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="1000">
        <p>Skill is a person's ability to do something based on his interests and talents. The definition 
          of skill which is almost the same as competence is what often makes many people confused about the 
          difference. I started and honed my skills for the first time when I was in junior high school, at 
          that time I enjoyed seeing someone's editing results, so, I started to learn editing.
        </p>
        <div className="bars">
          <ul className="skills">
            <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
            <li><span className="bar-expand illustrator" /><em>Adobe Illustrator</em></li>
            <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
            <li><span className="bar-expand css" /><em>CSS</em></li>
            <li><span className="bar-expand html5" /><em>HTML</em></li>
            <li><span className="bar-expand jquery" /><em>Javascript</em></li>
          </ul>
        </div>
      </div>
    </div> 
  </section> 
  )
}

export default Resume