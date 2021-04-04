import React from 'react';
import { Link } from 'react-router-dom';
import './MiniGames.scss';

const MiniGames = () => {
  return (
    <div className="mg-section">
      <div className="mg-section__iw">
        <div className="mg-section__iw__row">
          <div className="mini-game mini-game-1">
            <Link to="/audiocall" className="mini-game__link mini-game-1__link">
              <h3 className="mini-game__title">Аудиовызов</h3>
            </Link>
          </div>

          <div className="mini-game mini-game-2">
            <a className="mini-game__link mini-game-2__link" href="/main">
              <h3 className="mini-game__title">Своя игра</h3>
            </a>
          </div>
        </div>

        <div className="mg-section__iw__row">
          <div className="mini-game mini-game-3">
            <a className="mini-game__link mini-game-3__link" href="/main">
              <h3 className="mini-game__title">Саванна</h3>
            </a>
          </div>

          <div className="mini-game mini-game-4">
            <a className="mini-game__link mini-game-4__link" href="/main">
              <h3 className="mini-game__title">Спринт</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniGames
