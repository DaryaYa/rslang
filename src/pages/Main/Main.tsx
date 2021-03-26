import React from 'react';
import './Main.scss';
// COMPONENTS
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Video from '../../components/YouTube/Video';
// IMAGES
import videoOverlay from '../../assets/images/video.svg';

const Main = () => {
  return (
    <>
      <section className="fp-section section-bigben">
        <div className="fp-section__iw">
          <h1 className="section-bigben__title">Want to improve your English?<br />You are at the right place!</h1>
          <div className="section-bigben__content">
            <RegisterForm />
          </div>
        </div>
      </section>

      <section className="fp-section section-video">
        <div className="fp-section__iw">
          <h3 className="section-video__title">Title of the section</h3>
          <div className="section-video__text">
            Text something like check out how to use our site. Text something like check out how to use our site. Text something like check out how to use our site.
          </div>
          <div className="section-video__youtube">
            <img src={videoOverlay} alt=""/>
            <Video videoId="hoOlURkumCE" />
          </div>
        </div>
      </section>

      <section className="fp-section section-textbook">
        <div className="fp-section__iw">
          <h3 className="section-textbook__title">Catchy title for el. textbook</h3>
          <div className="section-textbook__text-wr">
            <div className="section-textbook__text">
              Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool.
            </div>
          </div>
        </div>
      </section>

      <section className="fp-section section-games">
        <div className="fp-section__iw">
          <h3 className="section-games__title">Learn and have fun at the same time</h3>
          <div className="section-games__text-wr">
            <div className="section-games__text">
              Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool. Text about the electronic textbook. 2-3 sentences describing why is it cool.
            </div>
          </div>
        </div>
      </section>

      <section className="fp-section section-statistics">
        <div className="fp-section__iw">
          <h3 className="section-statistics__title">Monitor your progress</h3>
          <div className="section-statistics__text-wr">
            <div className="section-statistics__text">
              A small cool-sounding text about how the statistics and interval learning method works. A small cool-sounding text about how the statistics and interval learning method works. A small cool-sounding text about how the statistics and interval learning method works. A small cool-sounding text about how the statistics and interval learning method works.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;
