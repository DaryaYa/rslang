import React, { useState } from 'react';
import Pagination from '../../components/Pagination'
import { BsTrash } from 'react-icons/bs';
import { GiSpeaker } from 'react-icons/gi';
import book1  from '../../hardcodeDb';
import './TextBook.scss'

const TextBook = () => {
  const [posts] = useState(book1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [activeIdx, setActiveIdx] = useState(0);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginateClickHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setActiveIdx(pageNumber - 1);
  }

  interface IwordList {
    word: string,
    image: string,
    audio: string,
    audioMeaning: string,
    audioExample: string,
    textMeaning: string,
    textExample: string,
    transcription: string,
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string,
    id: number,
  }

  interface IpostsInt {
    posts: IwordList[],
  }

  const RenderWordsList: React.FC<IpostsInt> = ({ posts }) => {
    return(
      <div className="vocabulary">
      {posts.map((el) => {
        return (
          <div key={el.id} className="vocabulary__word">
            <div className="vocabulary__word__block-top">
              <div className="vocabulary__word__en-wrapper">
                <GiSpeaker className="vocabulary__controls-play" />
                <div className="vocabulary__word__en">{el.word}</div>
                <BsTrash className="vocabulary__controls-delete" />
              </div>

              <div className="vocabulary__word__transcription">{el.transcription}</div>
              <div className="vocabulary__word__ru">{el.wordTranslate}</div>
            </div>

            <div className="vocabulary__word__image"
                 style={{ backgroundImage: `url("https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${el.image}")` }}>
            </div>

            <div className="vocabulary__word__example">
              <div className="vocabulary__word__example__en">{el.textExample}</div>
              <div className="vocabulary__word__example__ru">{el.textExampleTranslate}</div>
            </div>
          </div>
        )
      })}
    </div>
    )
  }
  
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
            <div className="textbook__title-wrapper">
              <h1 className="textbook__title">My electronic textbook</h1>
            </div>
            <div className="textbook__descr">
              <span>Learn new words.</span>
              <span>Put your knowledge into practice.</span>
              <span>Read for fun.</span>
            </div>
          </div>

          <div className="tab-pane fade" id="vocabulary" role="tabpanel" aria-labelledby="vocabulary-tab">
            <div className="textbook__subtitle-wrapper">
              <h2 className="textbook__subtitle">Learn new words</h2>
            </div>

            <RenderWordsList posts={currentPost} />

            <div className="pager">
              <span className="pager__text">Page</span>
              <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginateClickHandler} activeIdx={activeIdx} />
            </div>
          </div>

          <div className="tab-pane fade" id="exercises" role="tabpanel" aria-labelledby="exercises-tab">
            <div className="textbook__subtitle-wrapper">
              <h2 className="textbook__subtitle">Exercise 1: Part A</h2>
            </div>
          </div>

          <div className="tab-pane fade" id="story" role="tabpanel" aria-labelledby="story-tab">мисмиваерну4к</div>
        </div>
      </div>
    </section>
  )
}

export default TextBook
