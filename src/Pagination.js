import React from "react";

const Pagination = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];

  const maxPageButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-14 flex justify-center">
      <ul className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-1 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 font-medium"
          >
            Previous
          </button>
        </li>
        {startPage > 1 && (
          <li>
            <span className="px-4 py-2.5 text-gray-500">...</span>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-2 py-1 rounded-full font-medium transition duration-200 transform hover:-translate-y-0.5
                ${
                  currentPage === number
                    ? "bg-amber-900 hover:bg-amber-600 text-white shadow-lg ring-2"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
            >
              {number}
            </button>
          </li>
        ))}
        {endPage < totalPages && (
          <li>
            <span className="px-4 py-1 text-gray-500">...</span>
          </li>
        )}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-5 py-1 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 font-medium"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
