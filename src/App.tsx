import { useState, useEffect } from 'react';
import './App.css';

import Container from '@mui/material/Container';
import Main from './pages/Main';

import useFetch from './utils/useFetch'
import { RowsContext } from './utils/RowsContext';
import Loader from './atoms/Loader';

interface Data {
  name: string,
  count: number,
}

function createData(
  name: string,
  count: number,
): Data {
  return { name, count };
}

function App() {
  const [rows, setRows] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const tagsData = useFetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow');

  useEffect(() => {
    const getTagsData = async () => {
      const res = await tagsData.execute();
  
      if (res) {
        const tempArray: Data[] = [];
        if (typeof res.items !== 'undefined') {
          res.items.sort((a : Data, b: Data) => b.count - a.count).forEach((element: Data) => {
            tempArray.push(createData(element.name, element.count));
          });
          setRows(tempArray);
        }
      }
      setLoading(false);
    }

    setLoading(true);
    getTagsData();
  }, []);

  return (
    <Container maxWidth="md">
      <RowsContext.Provider value={rows}>
        {loading
          ? <Loader />
          : <Main />}
      </RowsContext.Provider>
    </Container>
  );
}

export default App;