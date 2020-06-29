import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pages = Math.ceil(totalCards / cardsPerPage);

  return (
    <div className="paginate">
      {currentPage > 1 ? (
        <button onClick={() => paginate(currentPage - 1)}>Previous</button>
      ) : (
        ""
      )}

      {currentPage - 2 > 1 ? (
        <>
          <button onClick={() => paginate(1)}>1</button>
          ...
        </>
      ) : null}
      {currentPage > 1 ? (
        <button onClick={() => paginate(currentPage - 1)}>
          {currentPage - 1}
        </button>
      ) : null}

      <button className="active">{currentPage}</button>

      {currentPage < pages ? (
        <button onClick={() => paginate(currentPage + 1)}>
          {currentPage + 1}
        </button>
      ) : null}

      {currentPage === 1 && pages > 2 ? (
        <button onClick={() => paginate(currentPage + 2)}>
          {currentPage + 2}
        </button>
      ) : null}

      {currentPage + 2 < pages ? (
        <>
          ...
          <button onClick={() => paginate(pages)}>{pages}</button>
        </>
      ) : null}

      {currentPage < pages ? (
        <button onClick={() => paginate(currentPage + 1)}>Next</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
