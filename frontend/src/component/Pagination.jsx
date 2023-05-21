import React from 'react'

export const Pagination = ({totalPages,handlePageChange,currentPage}) => {
  return (
    <div>
        <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        )}
      </div> 
    </div>
  )
}


 