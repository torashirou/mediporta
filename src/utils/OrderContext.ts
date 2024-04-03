import { createContext, Dispatch, SetStateAction } from 'react';

interface OrderContextInterface {
  order: boolean,
  setOrder: Dispatch<SetStateAction<boolean>>,
}

export const OrderContext = createContext<OrderContextInterface>({order: false, setOrder: () => {}});