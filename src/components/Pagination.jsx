import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, activeIdx }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Router>
      <nav className="pagination-wrapper">
        <ul className="pagination">
          {pageNumbers.map((number, idx) => (
            <li key={number} className="pagination__item">
              <Link to="!#" onClick={() => paginate(number)} className={`pagination__item__link ${activeIdx === idx ? 'pagination__item__link_active' : ''}`}>
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Router>
  )
}

export default Pagination;