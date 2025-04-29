import React from 'react';
import { PaginationProps } from '../interfaces/PaginationProps';
import './Pagination.css'

const displayMorePages = ()=>{
    for(let i=1; i <= 3; i++){

    }
}
const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, maxPage }) => {
    return (
        <div className="pagination">
            <button
                id="prev-button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous Page
            </button>
            {[3,2,1].map(x=> (
                currentPage-x>0 && <span onClick={() => setCurrentPage(currentPage - x)} id="page-number-3">{currentPage-x} </span>
            ))}
            <span onClick={() => setCurrentPage(currentPage)}id="page-number" className='current-page'>{currentPage}</span>
            {[1,2,3].map(x=> (
                currentPage+x<=maxPage && <span onClick={() => setCurrentPage(currentPage + x)} id="page-number-3">{currentPage+x} </span>
            ))}
            <button
                id="next-button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= maxPage}
            >
                Next Page
            </button>
        </div>
    );
};

export default Pagination;
