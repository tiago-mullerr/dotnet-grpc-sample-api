import './App.css';
import { isAlive } from './services/health/health.service';
import { streamLines } from './services/filestream/filestream.service';
import Button from './components/Button/Button';

function App() {
  const sayHelloHandler = () => {
    isAlive();
  }

  const streamLinesHandler = () => {
    streamLines(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={sayHelloHandler}>Test gRPC Client</Button>
        <Button onClick={streamLinesHandler}>Stream Lines</Button>
      </header>
    </div>
  );
}

export default App;
