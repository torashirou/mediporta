import { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { PagerContext } from '../utils/PagerContext';

export default function RowsCounter() {
  const {setRowsPerPage, rowsPerPage} = useContext(PagerContext);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = parseInt(event.target.value, 10);
    if (current) {
      setRowsPerPage(current);
    } else {
      setRowsPerPage(1);
    }
  }

  return (
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
  )
}