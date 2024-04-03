import { useContext } from 'react';
import TablePagination from '@mui/material/TablePagination';

import { PagerContext } from '../utils/PagerContext';
import { RowsContext } from '../utils/RowsContext';

export default function ContextTablePagination() {
  const { page, rowsPerPage, setPage, setRowsPerPage } = useContext(PagerContext);
  const rowsContext = useContext(RowsContext);

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
      count={rowsContext.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}