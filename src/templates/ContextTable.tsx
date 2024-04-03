import React, { useContext, useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { PagerContext } from '../utils/PagerContext';
import { RowsContext } from '../utils/RowsContext';

interface Column {
  id: 'name' | 'count';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'count', label: 'Count', minWidth: 100 },
];

interface Data {
  name: string,
  count: number,
}

interface TableProps {
  rows: Data[]
}

const ContextTable  = ( { rows } : TableProps ) => {
  const [order, setOrder] = useState(false);
  const pager = useContext(PagerContext);
  // const rows = useContext(RowsContext);

  const handleChangePage = (event: unknown, newPage: number) => {
    pager.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    pager.setRowsPerPage(+event.target.value);
    pager.setPage(0);
  };

  const handleSort = () => {
    setOrder(!order);
  }

  return (<>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id !== 'count' ? '' : order ? <ArrowUpwardIcon onClick={handleSort} /> : <ArrowDownwardIcon onClick={handleSort}/>}
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .sort((rowA, rowB) => order ? rowA.count - rowB.count : rowB.count - rowA.count)
              .slice(pager.page * pager.rowsPerPage, pager.page * pager.rowsPerPage + pager.rowsPerPage)
              .map((row) => {
                console.log(row);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[pager.rowsPerPage, pager.rowsPerPage * 2, pager.rowsPerPage * 4]}
        component="div"
        count={rows.length}
        rowsPerPage={pager.rowsPerPage}
        page={pager.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
</>
  );
}

export default ContextTable;