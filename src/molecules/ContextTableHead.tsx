import { useContext } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { OrderContext } from '../utils/OrderContext';
import StyledSpan from '../styled/StyledSpan';

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

export default function ContextTableHead() {
  const { order, setOrder } = useContext(OrderContext);

  const handleSort = () => {
    setOrder(!order);
  }

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            <StyledSpan>
              {column.id !== 'count' ? '' : order ? <ArrowUpwardIcon onClick={handleSort} /> : <ArrowDownwardIcon onClick={handleSort}/>}
              {column.label}
            </StyledSpan>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}