import React from 'react';
import './intro.css';
import imgBg from '../../Assets/Mypic.jpg';
import { Link } from 'react-router-dom';
import imgBtn from '../../Assets/hireme.png';
import EmailForm from '../EmailForm';

const Intro = () => {
  return (
    <section id="intro" className="intro-container">
      <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className='introText'>I'm <span className='introName'>Hemika Amilineni</span> <br />Full Stack Developer</span>
        <p className='introPara'>
          I'm a Computer Science Master's student at the University of Kansas with over a year of hands-on experience
          in full stack development.<br/> I specialize in building robust, responsive web applications using technologies 
          like React, HTML, CSS, JavaScript, Python, MySQL,<br/> and Java Spring Boot.<br/><br/>
          I’m passionate about solving real-world problems and continuously expanding my skill set.
        </p>
        <Link to="/EmailForm" smooth={true} duration={500}>
          <button className="btn">
            <img src={imgBtn} alt='Hire Me' className='btnImg' />Hire Me
          </button>
        </Link>
      </div>
      <img src={imgBg} alt='Profile' className='bg' />
    </section>
  );
}

export default Intro;
