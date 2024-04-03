import { createContext, Dispatch, SetStateAction } from 'react';

interface PagerContextInterface {
  page: number,
  rowsPerPage: number,
  setPage: Dispatch<SetStateAction<number>>,
  setRowsPerPage: Dispatch<SetStateAction<number>>,
}

export const PagerContext = createContext<PagerContextInterface>({ page: 0, rowsPerPage: 10, setPage: () => {}, setRowsPerPage: () => {} });