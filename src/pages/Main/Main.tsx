import React from 'react';
import './Main.scss';
// COMPONENTS
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Video from '../../components/YouTube/Video';
// IMAGES
import bigbenImg from '../../assets/images/bigben.svg';
import textbookShadow from '../../assets/images/textbook-shadow.svg';
import textbook from '../../assets/images/textbook.svg';
import gamepadShadow from '../../assets/images/gamepad-shadow.svg';
import gamepad from '../../assets/images/gamepad.svg';
import graphicShadow from '../../assets/images/graphic-shadow.svg';
import graphic from '../../assets/images/graphic.svg';


const Main = () => {
  return (
    <>
      <section className="bigben">
        <h3 className="bigben__title">Want to improve your English? <br /> You are at the right place!</h3>
        <div className="bigben__flex">
          <RegisterForm />
          <img src={bigbenImg} alt="Big Ben" className="bigben__image" />
        </div>
      </section>
      <section className="video">
        <h3 className="video__title">Title of the section</h3>
        <p className="video__text">Text something like check out how to use our site. <br /> Text something like check out how to use our site. <br /> Text something like check out how to use our site.</p>
        <div className="video__youtube">
          <Video videoId="hoOlURkumCE" />
        </div>
      </section>
      <section className="textbook">
        <h3 className="textbook__title">Catchy title for el. textbook</h3>
        <p className="textbook__text">Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool.</p>
        <img src={textbook} alt="textbook" />
      </section>
      <section className="games">
        <h3 className="games__title">Learn and have fun at the same time</h3>
        <p className="games__text">Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool.</p>
        <img src={gamepad} alt="gamepad" />
      </section>
      <section className="statistics">
        <h3 className="statistics__title">Monitor your progress</h3>
        <p className="statistics__text"></p>
        <img src={graphic} alt="graphic" />
      </section>


      <img src={textbookShadow} alt="textbook shadow" />
      <img src={gamepadShadow} alt="gamepadShadow" />
      <img src={graphicShadow} alt="graphicShadow" />
      
    </>
  )
}

export default Main;
