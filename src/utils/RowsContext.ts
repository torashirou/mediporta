import { createContext } from 'react';

interface Data {
  name: string,
  count: number,
}

export const RowsContext = createContext<Data[]>([]);