import { useState, useContext } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { OrderContext } from '../utils/OrderContext';
import { PagerContext } from '../utils/PagerContext';
import { RowsContext } from '../utils/RowsContext';

import ContextTablePagination from '../molecules/ContextTablePagination';
import ContextTableHead from '../molecules/ContextTableHead';
import ContextTableBody from '../organisms/ContextTableBody';


const ContextTable  = () => {
  const [order, setOrder] = useState(false);
  const pager = useContext(PagerContext);
  const rowsContext = useContext(RowsContext);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <OrderContext.Provider value={{order: order, setOrder: setOrder}}>
          <Table stickyHeader aria-label="sticky table">
            <ContextTableHead />
            <ContextTableBody rows={rowsContext} order={order}/>
          </Table>
        </OrderContext.Provider>
      </TableContainer>
      <ContextTablePagination {...pager} count={rowsContext.length} />
    </Paper>
  );
}

export default ContextTable;