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
    <>
      <div className='container-fluid'>
        <RenderWordsList posts={currentPost} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </>
  )
}

export default TextBook
