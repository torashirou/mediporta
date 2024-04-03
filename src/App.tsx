import React, { useEffect } from 'react';
import './App.css';

import Container from '@mui/material/Container';
import Main from './pages/Main';

import useFetch from './utils/useFetch'
import { RowsContext } from './utils/RowsContext';

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
  const [tags, setTags] = React.useState<any>({});
  const [rows, setRows] = React.useState<Data[]>([]);
  const tagsData = useFetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow');

  useEffect(() => {
    const getTagsData = async () => {
      const res = await tagsData.execute();
  
      if (res) {
        setTags(res);
        const tempArray: Data[] = [];
        if (typeof res.items !== 'undefined') {
          res.items.sort((a : Data, b: Data) => b.count - a.count).forEach((element: Data) => {
            tempArray.push(createData(element.name, element.count));
          });
          setRows(tempArray);
        }
      }
    }

    getTagsData();
  }, []);

  return (
    <Container maxWidth="md">
      <Main rows={rows}/>
    </Container>
  );
}

export default App;