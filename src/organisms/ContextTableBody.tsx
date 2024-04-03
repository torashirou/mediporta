import { useContext } from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { PagerContext } from '../utils/PagerContext';

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

interface TableInteface {
  rows: {
    name: string,
    count: number,
  }[]
  order: boolean
}

export default function ContextTableBody( { rows, order }: TableInteface) {
  const { page, rowsPerPage } = useContext(PagerContext);

  return (
    <TableBody>
      {rows
        .sort((rowA, rowB) => order ? rowA.count - rowB.count : rowB.count - rowA.count)
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
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
  )
}