import React, {useState, useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Pagination from "./Pagination";
import Filter from "./Filter";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { deleteInvoice } from "../features/invoices/invoicesSlice";
import InvoiceModal from "./InvoiceModal";
import { Redirect } from "react-router-dom";
import { useSnackbar } from "notistack";

const ListAllInvoices = ({ data, handleEditInvoiceData }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState(null);
  const [invoiceNumber, setInvoiceNumber] = useState(null);
  const [info, setInfo] = useState({});
  const [showViewModal, setShowViewModal] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();


  // handle delete invoice
  const handleDelete = (id) => {
    setInvoiceNumber(data.find((invoice) => invoice.id === id).invoiceNumber);
    setId(id);
    setShowDeleteModal(true);
  };

  // action on delete confirm
  const handleDeleteConfirm = () => {
    dispatch(deleteInvoice(id));
    enqueueSnackbar("Deleted successfully", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      autoHideDuration: 1500,
    });
    setShowDeleteModal(false);
  };

  // handle view invoice
  const handleView = (id) => {
    setInfo(data.find((invoice) => invoice.id === id));
    setShowViewModal(true);
  };

  // handle edit invoice
  const handleEdit = (id) => {
    handleEditInvoiceData(id);
    setRedirect("/editInvoice");
  };

  // close modals
  const handleCloseDelete = () => setShowDeleteModal(false);
  const handleCloseView = () => setShowViewModal(false);

  // Define a default UI for table
  const columns = useMemo(
    () => [
      {
        Header: "Invoice Number",
        accessor: "invoiceNumber",
        minWidth: 100,
        maxWidth: 200,
        width: 150,
        Cell: ({ value }) => {
          return <div className="fs-6 fw-bold px-4 py-2 ">{value}</div>;
        },
      },
      {
        Header: "Billed By",
        accessor: "billFrom",
        minWidth: 100,
        maxWidth: 200,
        width: 150,

        Cell: ({ value }) => {
          return <div className="fs-6 fw-bold px-4 py-2 ">{value}</div>;
        },
      },
      {
        Header: "Billed To",
        accessor: "billTo",
        minWidth: 100,
        maxWidth: 200,
        width: 150,
        Cell: ({ value }) => {
          return <div className="fs-6 fw-bold px-4 py-2 ">{value}</div>;
        },
      },
      {
        Header: "Issue Date",
        accessor: "dateOfIssue",
        width: 150,
        Cell: ({ value }) => {
          return <div className="fs-6 fw-bold px-4 py-2 ">{value}</div>;
        },
      },
      {
        Header: "Amount",
        accessor: "total",
        minWidth: 100,
        maxWidth: 200,
        width: 150,
        Cell: ({ value }) => {
          return (
            <div className="fs-6 fw-bold px-4 py-2 text-center">{value}</div>
          );
        },
      },
      {
        Header: "Action",
        accessor: "id",
        minWidth: 150,
        maxWidth: 250,
        width: 200,
        Cell: ({ value }) => {
          return (
            <div className="d-flex flex-column p-2">
              <div className="d-flex m-1">
                <div
                  className="px-2 py-1 border rounded rounded-2 me-1 bg-primary text-white"
                  onClick={() => handleView(value)}
                >
                  <AiFillEye />
                  View
                </div>
                <div
                  className="px-2 py-1 border rounded rounded-2 ms-1 bg-secondary text-white"
                  onClick={() => handleEdit(value)}
                >
                  <AiFillEdit />
                  Edit
                </div>
              </div>
              <div className=" ">
                <div
                  className="px-2 py-1 border rounded rounded-2 bg-danger text-white mx-1 text-center"
                  onClick={() => handleDelete(value)}
                >
                  <AiFillDelete />
                  Delete
                </div>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups if your table have groupings
    // rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { pageSize, pageIndex } = state;
  const [filterInput, setFilterInput] = useState("");
  
  // handle filter
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  // handle page size change
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  // Render the UI for your table
  return (
    <div className="p-4 border rounded rounded-2">
      <Filter
        handleFilterChange={handleFilterChange}
        filterInput={filterInput}
      />
      <table {...getTableProps()} className="">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="border-bottom border-secondary-subtle"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="fs-5 fw-semibold text-secondary px-4 py-2 text-start"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-bottom border-secondary-subtle"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        isPrev={canPreviousPage}
        isNext={canNextPage}
        pageSize={pageSize}
        handlePageSizeChange={handlePageSizeChange}
        data={data}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
      />
      <DeleteConfirmModal
        show={showDeleteModal}
        handleClose={handleCloseDelete}
        handleDeleteConfirm={handleDeleteConfirm}
        invoiceNumber={invoiceNumber}
      />
      <InvoiceModal
        showModal={showViewModal}
        info={info}
        closeModal={handleCloseView}
        type="view"
      />
    </div>
  );
};

export default ListAllInvoices;
