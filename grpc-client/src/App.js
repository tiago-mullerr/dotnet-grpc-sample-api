import './App.css';
import { isAlive } from './services/health/health.service';
import Button from './components/Button/Button';

function App() {
  const sayHelloHandler = () => {
    isAlive();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={sayHelloHandler}>Test gRPC Client</Button>
      </header>
    </div>
  );
}

export default App;
