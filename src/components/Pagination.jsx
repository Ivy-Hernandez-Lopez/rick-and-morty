import React from 'react';
import './styles/pagination.css'

const Pagination = ({currentPage, setCurrentPage, totalPage}) => {

    const handlePrev = () => {
        if (currentPage>1) {
            setCurrentPage(currentPage -1);
        }
    }

    const handleNext = () => {
        if (currentPage<totalPage) {
            setCurrentPage(currentPage +1);
        }        
    }

  return (
    <div className='pagination'>
        <button onClick={handlePrev}>Prev</button>
        <span>{`${currentPage} / ${totalPage}`}</span>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination;