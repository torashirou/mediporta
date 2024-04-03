import { useState } from 'react';

import { PagerContext } from '../utils/PagerContext';
import ContextTable from '../templates/ContextTable';
import RowsCounter from '../molecules/RowsCounter';

const Main = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <PagerContext.Provider value={{ page, rowsPerPage, setPage, setRowsPerPage }}>
      <RowsCounter />
      <ContextTable />
    </PagerContext.Provider>
  );
}

export default Main;