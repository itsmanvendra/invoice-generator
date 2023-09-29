import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Pagination = ({pageIndex, pageSize, isPrev, isNext, handlePageSizeChange, previousPage, nextPage, data, pageOptions}) => {
  return (
    <div className="d-flex flex-column flex-md-row m-2">
      <div className="flex-grow-1 my-2 my-md-0">
        Showing {pageIndex * pageSize + 1} to {(pageIndex * pageSize + pageSize < data.length) ? `${ pageIndex * pageSize + pageSize}` : `${data.length}`}{" "}
        invoices of {data.length} entries
      </div>
      <div>
        <select
          className="px-2 py-1 rounded rounded-2 me-2 my-2 my-md-0"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(e)}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex align-items-center my-2 my-md-0">
        <button
          onClick={() => previousPage()}
          disabled={!isPrev}
          className="border rounded rounded-3 fw-bold"
        >
          <GrFormPrevious /> Previous
        </button>

        <div className="mx-2 fs-6 fw-semibold">
          {pageIndex + 1} of {pageOptions.length}
        </div>

        <button
          onClick={() => nextPage()}
          disabled={!isNext}
          className="border rounded rounded-3 fw-bold"
        >
          Next <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
