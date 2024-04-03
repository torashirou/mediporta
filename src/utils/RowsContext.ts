import { createContext } from 'react';

interface RowsContextInterface {
  name: string,
  count: number,
}

export const RowsContext = createContext<RowsContextInterface[]>([]);