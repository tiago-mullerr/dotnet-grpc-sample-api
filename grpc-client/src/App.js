import logo from './logo.svg';
import './App.css';
import { sayHello } from './services/greeter/greeter.service';
import Button from './components/Button/Button';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const sayHelloHandler = () => {
    sayHello();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={sayHelloHandler}>Send gRPC Request</Button>
      </header>
    </div>
  );
}

export default App;
