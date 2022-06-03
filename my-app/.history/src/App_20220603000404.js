import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const quantity = [1015, 812, 1046, 868];
  const [Info, setInfo] = useState()

  const MINUTE_MS = 60000;

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i< quantity.length; i++) {
        FetchComments(quantity[i])
        if (Info.workDescription.includes('ДП - Готівка, банк.картки 20л. Гаманець ПРАЙД до 100л. Талони до 40л. Паливна картка (ліміт картки).') 
       ){
         console.log(1);
       }
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])
  
  const FetchComments = async (i)=>{
    await axios.get(`https://api.wog.ua/fuel_stations/${i}`).then((response) => {
      
      const result = JSON.parse(response.request.response)
      setInfo(result.data);
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
