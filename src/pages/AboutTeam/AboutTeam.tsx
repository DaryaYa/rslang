import React from 'react';
import './AboutTeam.scss';
import Developer1 from '../../assets/images/developer-1.png';
import Developer2 from '../../assets/images/developer-2.png';
import Developer3 from '../../assets/images/developer-3.png';
import Developer4 from '../../assets/images/developer-4.png';
import Designer from '../../assets/images/designer.png';

const AboutTeam = () => {
  return (
    <main className="about-team">
      <h1 className="about-team__title">Our Dream Team</h1>

      <section className="developer developer-1">
        <div className="developer__wrapper">
          <img className="developer__photo" src={Developer1} alt="Developer 1"/>
          <div className="developer__info">
            <h3 className="developer__name">Name of the person</h3>
            <div className="developer__text">
              <p>The role in the project</p>
              <p>Information about him/herself. Some 2-3 sentences.Information about him/herself. Some 2-3 sentences.</p>
              <p>Links to their work, GitHub and otherwise. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="developer developer-2">
        <div className="developer__wrapper">
          <img className="developer__photo" src={Developer2} alt="Developer 2"/>
          <div className="developer__info">
            <h3 className="developer__name">Name of the person</h3>
            <div className="developer__text">
              <p>The role in the project</p>
              <p>Information about him/herself. Some 2-3 sentences.Information about him/herself. Some 2-3 sentences.</p>
              <p>Links to their work, GitHub and otherwise. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="developer developer-3">
        <div className="developer__wrapper">
          <img className="developer__photo" src={Developer3} alt="Developer 3"/>
          <div className="developer__info">
            <h3 className="developer__name">Name of the person</h3>
            <div className="developer__text">
              <p>The role in the project</p>
              <p>Information about him/herself. Some 2-3 sentences.Information about him/herself. Some 2-3 sentences.</p>
              <p>Links to their work, GitHub and otherwise. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="developer developer-4">
        <div className="developer__wrapper">
          <img className="developer__photo" src={Developer4} alt="Developer 4"/>
          <div className="developer__info">
            <h3 className="developer__name">Name of the person</h3>
            <div className="developer__text">
              <p>The role in the project</p>
              <p>Information about him/herself. Some 2-3 sentences.Information about him/herself. Some 2-3 sentences.</p>
              <p>Links to their work, GitHub and otherwise. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="designer">
        <div className="designer__text">Special thanks to our designer</div>
        <img className="designer__photo" src={Designer} alt="Shushan Harutyunyan"/>
        <h3 className="designer__name">Shushan Harutyunyan</h3>
      </section>
    </main>
  )
}

export default AboutTeam;