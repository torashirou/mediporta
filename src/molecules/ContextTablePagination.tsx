import { Dispatch, SetStateAction } from 'react';
import TablePagination from '@mui/material/TablePagination';

interface PaginationInterface {
  page: number,
  rowsPerPage: number,
  setPage: Dispatch<SetStateAction<number>>,
  setRowsPerPage: Dispatch<SetStateAction<number>>,
  count: number
}

export default function ContextTablePagination( { page, rowsPerPage, setPage, setRowsPerPage, count } : PaginationInterface ) {

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[rowsPerPage, rowsPerPage * 2, rowsPerPage * 4]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}