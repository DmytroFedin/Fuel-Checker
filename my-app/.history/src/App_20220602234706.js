import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const quantity = [1015, 812, 1046, 868]

  const MINUTE_MS = 60000;

  useEffect(() => {
    const interval = setInterval(() => {
      FetchComments()
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
  
  const FetchComments = async ()=>{
    await axios.get('https://api.wog.ua/fuel_stations/812').then((response) => {
      
      const result = JSON.parse(response.request.response)
      console.log(result.data);
    })   
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
