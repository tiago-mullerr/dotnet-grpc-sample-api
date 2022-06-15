import './App.css';
import { isAlive } from './services/health/health.service';
import { streamLines, getFileContents } from './services/filestream/filestream.service';
import Button from './components/Button/Button';
import DataTable from './components/DataTable/DataTable';
import Input from './components/Input/Input';
import { useState } from 'react';

const tableColumns = [
  'CHAVEDEACESSO',
  'MODELO',
  'SERIE',
  'NUMERO',
  'NATUREZADAOPERACAO',
  'DATAEMISSAO',
  'EVENTO',
  'DATAHORAEVENTO',
  'DESCRICAOEVENTO',
  'MOTIVOEVENTO'
];

function App() {

  const [grpcRows, setgrpcRows] = useState([]);
  const [restRows, setRestRows] = useState([]);
  const [query, setQuery] = useState(1000);
  const maxSize = 8000;

  const sayHelloHandler = () => {
    isAlive();
  }

  const streamLinesHandler = () => {
    let test = [];
    streamLines(query, (response) => {
      const parsedResponse = JSON.parse(response);
      const grpcRowsArray = test.concat(parsedResponse);
      test = grpcRowsArray;
      setgrpcRows(test);
    });
  }

  const getFileContentsHandler = () => {
    getFileContents(query).then((response) => {
      return response.json();
    }).then(data => {
      setRestRows(data);
    });
  }

  const streamSameTimeHandler = () => {
    getFileContentsHandler();
    streamLinesHandler();
  }

  const setQueryHandler = (e) => {
    if (parseInt(e.target.value) > maxSize)
      e.target.value = maxSize.toString();
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className='w-100 flex-centered'>
          <Button onClick={sayHelloHandler}>Test gRPC Client</Button>
        </div>
        <div className='w-100 flex-centered'>
          <Input max="100" placeholder="Enter the amount of lines to be fetched (max 8000)" onChange={setQueryHandler} type="number" ></Input>
        </div>
        <Button onClick={streamLinesHandler}>Stream Lines via gRPC</Button>
        <Button onClick={getFileContentsHandler}>Stream Lines via Rest</Button>
        <div className='w-100'>
          <Button onClick={streamSameTimeHandler}>Stream both</Button>
        </div>
        <div className='table-container'>
          <DataTable cellClasses='small-text' columns={tableColumns} rows={grpcRows}></DataTable>
          <DataTable cellClasses='small-text' columns={tableColumns} rows={restRows}></DataTable>
        </div>
      </div>
    </div>
  );
}

export default App;
