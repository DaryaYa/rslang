import React, { useState } from 'react';
import Pagination from '../../components/Pagination'
import { BiTrash, BiPlay } from 'react-icons/bi';
import book1  from '../../hardcodeDb';
import './TextBook.scss'

const TextBook = () => {
  const [posts] = useState(book1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
      <ul className="list-group mb-4">
      {posts.map((el) => {
        return (
            <li key={el.id} className="d-flex list-group-item justify-content-between align-items-center">

              <div className="d-flex justify-content-start align-items-center">
                <div className="btns">
                  <BiTrash />
                  <BiPlay />
                </div>
                <div className="words">
                  <span className="mr-3 mb-2 text-capitalize">{el.word}</span>
                  <span className="mr-3 mb-2">{el.transcription}</span>
                  <span className="text-capitalize mr-3">{el.wordTranslate}</span>
                </div>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-2">
                <span className="mr-3 mb-3">{el.textExample}</span>
                <span className="mr-3">{el.textExampleTranslate}</span>
              </div>

              <div className="d-flex justify-content-end">
                <img
                  src={`https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${el.image}`}
                  className="rounded float-right"
                  width="100px"
                  alt={el.textExample}>
                </img>
              </div>

            </li>
        )
      })}
    </ul>
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
            <div className="textbook__title__wrapper">
              <h1 className="textbook__title">My electronic textbook</h1>
            </div>
            <div className="textbook__descr">
              <span>Learn new words.</span>
              <span>Put your knowledge into practice.</span>
              <span>Read for fun.</span>
            </div>
          </div>

          <div className="tab-pane fade" id="vocabulary" role="tabpanel" aria-labelledby="vocabulary-tab">
            <RenderWordsList posts={currentPost} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </div>
          
          <div className="tab-pane fade" id="exercises" role="tabpanel" aria-labelledby="exercises-tab">фывпавпрвармцукцук23412143</div>
          <div className="tab-pane fade" id="story" role="tabpanel" aria-labelledby="story-tab">мисмиваерну4к</div>
        </div>
      </div>
    </section>
  )
}

export default TextBook
