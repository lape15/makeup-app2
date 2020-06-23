import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];
  const pages = Math.ceil(totalCards / cardsPerPage);
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginate">
      {currentPage > 1 ? (
        <a href="!#" onClick={() => paginate(currentPage - 1)}>
          Prev
        </a>
      ) : (
        ""
      )}

      {currentPage - 2 > 1 ? (
        <>
          <a href="!#" onClick={() => paginate(1)}>
            1
          </a>
          ...
        </>
      ) : null}
      {currentPage > 1 ? (
        <a href="!#" onClick={() => paginate(currentPage - 1)}>
          {currentPage - 1}
        </a>
      ) : null}

      <a className="active" href="!#">
        {currentPage}
      </a>

      {currentPage < pages ? (
        <a href="!#" onClick={() => paginate(currentPage + 1)}>
          {currentPage + 1}
        </a>
      ) : null}

      {currentPage === 1 && pages > 2 ? (
        <a href="!#" onClick={() => paginate(currentPage + 2)}>
          {currentPage + 2}
        </a>
      ) : null}

      {currentPage + 2 < pages ? (
        <>
          ...
          <a href="!#" onClick={() => paginate(pages)}>
            {pages}
          </a>
        </>
      ) : null}

      {currentPage < pages ? (
        <a href="!#" onClick={() => paginate(currentPage + 1)}>
          Next
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
