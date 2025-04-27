import React from 'react';
import { PaginationProps } from '../interfaces/PaginationProps';
import './Pagination.css'

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
            <span id="page-number">Page {currentPage}</span>
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
