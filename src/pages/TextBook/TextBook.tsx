import React from 'react';
import './TextBook.scss'

const TextBook = () => {
  return (
    <section className="textbook">
      <div className="textbook__wrapper">
        <ul className="nav nav-pills textbook-nav" role="tablist">
          <li className="textbook-nav__item textbook-nav__item-0" role="presentation">
            <div className="textbook-nav__item__button active"
                    data-bs-toggle="tab"
                    data-bs-target="#textbook"
                    aria-selected="true">
              <div className="textbook-nav__item__button__iw">
                Textbook
              </div>
            </div>
          </li>

          <li className="textbook-nav__item textbook-nav__item-1" role="presentation">
            <div className="textbook-nav__item__button"
                    data-bs-toggle="tab"
                    data-bs-target="#vocabulary"
                    aria-selected="true">
              <div className="textbook-nav__item__button__iw">
                Vocabulary
              </div>
            </div>
          </li>

          <li className="textbook-nav__item textbook-nav__item-2" role="presentation">
            <div className="textbook-nav__item__button"
                    data-bs-toggle="tab"
                    data-bs-target="#exercises"
                    aria-selected="false">
              <div className="textbook-nav__item__button__iw">
                Exercises
              </div>
            </div>
          </li>

          <li className="textbook-nav__item textbook-nav__item-3" role="presentation">
            <div className="textbook-nav__item__button"
                    data-bs-toggle="tab"
                    data-bs-target="#story"
                    aria-selected="false">
              <div className="textbook-nav__item__button__iw">
                The Lion and The Rabbit
              </div>
            </div>
          </li>
        </ul>

        <div className="tab-content textbook__tab-content">
          <div className="tab-pane fade show active" id="textbook" role="tabpanel" aria-labelledby="textbook-tab">
            <div className="textbook__title__wrapper">
              <h1 className="textbook__title">My electronic textbook</h1>
            </div>
            <div className="textbook__descr">
              <span>Learn new words.</span>
              <span>Put your knowledge into practice.</span>
              <span>Read for fun.</span>
            </div>
          </div>

          <div className="tab-pane fade" id="vocabulary" role="tabpanel" aria-labelledby="vocabulary-tab">фывафывафыва</div>
          <div className="tab-pane fade" id="exercises" role="tabpanel" aria-labelledby="exercises-tab">фывпавпрвармцукцук23412143</div>
          <div className="tab-pane fade" id="story" role="tabpanel" aria-labelledby="story-tab">мисмиваерну4к</div>
        </div>

      </div>
    </section>
  )
}

export default TextBook
