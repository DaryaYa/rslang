import React from 'react';
import './Footer.scss';
// IMAGES
import DaryaImg from '../../assets/images/daryaya.jpg';
import Diel89 from '../../assets/images/diel89.png';
import Fizik003 from '../../assets/images/fizik003.png';
import NickDudaryk from '../../assets/images/nickolay-dudaryk.png';
import SchoolLogo from '../../assets/images/rs_school_js.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__github">
        <a href="https://github.com/fizik003" rel="noreferrer" target="_blank" className="footer__github__link">
          <img src={Fizik003} className="footer__github__image" alt="developer github link" />
        </a>
        <a href="https://github.com/DaryaYa" rel="noreferrer" target="_blank" className="footer__github__link">
          <img src={DaryaImg} className="footer__github__image" alt="developer github link" />
        </a>
        <a href="https://github.com/DieL89" rel="noreferrer" target="_blank" className="footer__github__link">
          <img src={Diel89} className="footer__github__image" alt="developer github link" />
        </a>
        <a href="https://github.com/Nickolay-Dudaryk" rel="noreferrer" target="_blank" className="footer__github__link">
          <img src={NickDudaryk} className="footer__github__image" alt="developer github link" />
        </a>
      </div>
      <div className="footer__year">
        <span>2021</span>
      </div>
      <div className="footer__course-link">
        <a href="https://rs.school/react/" rel="noreferrer" target="_blank">
          <img src={SchoolLogo} className="footer__course-link__image" alt="course link" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
