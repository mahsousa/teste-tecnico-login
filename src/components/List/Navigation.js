import React from 'react';

const Navigation = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className='position-absolute bottom-0 start-0 end-0 ' >
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {/* Navegação */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
