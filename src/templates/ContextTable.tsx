import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { OrderContext } from '../utils/OrderContext';

import ContextTablePagination from '../atoms/ContextTablePagination';
import ContextTableHead from '../molecules/ContextTableHead';
import ContextTableBody from '../organisms/ContextTableBody';


const ContextTable  = () => {
  const [order, setOrder] = useState(false);


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <OrderContext.Provider value={{order: order, setOrder: setOrder}}>
          <Table stickyHeader aria-label="sticky table">
            <ContextTableHead />
            <ContextTableBody />
          </Table>
        </OrderContext.Provider>
      </TableContainer>
      <ContextTablePagination />
    </Paper>
  );
}

export default ContextTable;