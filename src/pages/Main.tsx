import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { PagerContext } from '../utils/PagerContext';
import { RowsContext } from '../utils/RowsContext';
import ContextTable from '../templates/ContextTable';

interface Data {
  name: string,
  count: number,
}

interface MainProps {
  rows: Data[]
}

const Main = ( { rows } : MainProps ) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const rows = useContext(RowsContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = parseInt(event.target.value, 10);
    if (current) {
      setRowsPerPage(current);
    } else {
      setRowsPerPage(1);
    }
  }

  return (
    <PagerContext.Provider value={{ page, rowsPerPage, setPage, setRowsPerPage }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          onChange={handleInput}
          defaultValue={rowsPerPage}
          InputProps={{
              inputProps: {
                min: 1 
              }
          }}
        />
      </Box>
      <ContextTable rows={rows} />
    </PagerContext.Provider>
  );
}

export default Main;