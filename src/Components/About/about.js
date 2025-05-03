import React, { useState } from 'react';
import './about.css';
import Apic from '../../Assets/Mypic.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach((tabLink) => {
      tabLink.classList.remove('active-link');
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    const clickedTab = document.getElementById(tabName);
    if (clickedTab) {
      clickedTab.classList.add('active-tab');
    }

    setActiveTab(tabName);
  };

  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='about-col1'>
            <img src={Apic} alt='Nithin Reddy Geereddy' className='Apic' />
          </div>
          <div className='about-col2'>
            <h1 className='sub-title'>About Me</h1>
            <p>
            I'm Hemika Amilineni, a Master’s student in Computer Science at the University of Kansas, with over a year of experience in full-stack application development. I am passionate about building scalable, responsive web applications and enjoy working across both frontend and backend technologies.

<br/>My technical skill set includes HTML, CSS, JavaScript, React.js, Python, and MySQL, along with backend frameworks like Java Spring Boot. I have hands-on experience developing RESTful APIs, designing dynamic UIs, and integrating frontend and backend systems seamlessly.

<br/>Professionally, I’ve worked as a Software Engineer at Accenture, where I contributed to enterprise-scale Java full-stack applications. At the University of Kansas, I currently support students as a Teaching Assistant and Tutor in computer science and math courses.

<br/>I thrive in collaborative, agile environments and continuously seek opportunities to grow as a developer and problem solver. Whether it's through academic projects like fraud detection systems or personal projects like a Netflix-clone SPA, I'm always eager to innovate and learn.


            </p>
            <div className='tab-titles'>
              <p
                className={`tab-links ${activeTab === 'skills' && 'active-link'}`}
                onClick={() => openTab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' && 'active-link'}`}
                onClick={() => openTab('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' && 'active-link'}`}
                onClick={() => openTab('education')}
              >
                Education
              </p>
            </div>
            <div className='tab-contents' id='skills'>
              {activeTab === 'skills' && (
                <ul>
                  <li>
                    <span>Java</span>
                  </li>
                  <li>
                    <span>Node.js</span>
                  </li>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>SQL</span>
                  </li>
                  <li>
                    <span>Data Analysis</span>
                  </li>
                  <li>
                    <span>Python</span>
                  </li>
                </ul>
              )}
            </div>
            <div className='tab-contents' id='experience'>
              {activeTab === 'experience' && (
                <ul>
                       <li>
        <span>Software Engineer, Accenture – Bengaluru, India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Oct 2022 – Oct 2023</span>
        <br />• Developed and maintained software using Java and Core Java with full-stack training on Java technologies.
        <br />• Built REST APIs using Spring Boot and created frontend SPAs with Angular and Bootstrap.
        <br />• Gained hands-on experience with Java Servlets, JPA, Spring Core, and Spring Boot for enterprise web apps.
        <br />• Used GitLab and DevOps tools to manage source code and deployments.
        <br />• Delivered an e-commerce platform with MySQL, Spring Boot, JPA/Hibernate, supporting product browsing, user accounts, orders, and payment flows.
      </li>
      <br />
      <li>
        <span>Teaching Assistant, University of Kansas – Lawrence, KS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aug 2024 – Present</span>
        <br />• Assist students in SQL and security courses by leading discussions, evaluating assignments, and offering one-on-one support.
        <br />• Facilitate understanding of complex technical concepts and promote academic excellence.
      </li>
      <br />
      <li>
        <span>TRIO Tutor, University of Kansas – Lawrence, KS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan 2024 – Present</span>
        <br />• Tutoring undergraduate students in Computer Science and Math subjects through individual sessions.
        <br />• Focus on conceptual clarity, problem-solving, and academic success.
      </li>


                </ul>
              )}
            </div>
            <div className='tab-contents' id='education'>
              {activeTab === 'education' && (
                <ul>
                  <li>
                    <span>Master of Science in Computer Science       (January 2024 - December 2025)</span>
                    <br></br>University of Kansas, USA, Lawrence, KS
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
