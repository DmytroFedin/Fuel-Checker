import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function App() {
  const quantity = [895];
  const [Info, setInfo] = useState()
  const prevValue = usePrevious(Info)

  

  if(Info && prevValue)
    
  { console.log('1');
  console.log(Info);
     if ( prevValue.workDescription !== Info.workDescription && Info.workDescription.includes('ДП - Готівка, банк.картки') )
     {
      const templateParams = {
        message: `${Info.name} Є дизпаливо по картках`,
    };
      // emailjs.send('service_78bgvog', 'template_rrocfu4', templateParams, 'CIwkzASVn2LRgUqgZ')
      // .then((result) => { 
      // }, (error) => {
      //     console.log(error.text);
      // });
    }}
  const MINUTE_MS = 60000;

  useEffect(() => {
    console.log('bing');
    const interval = setInterval(() => {
      for (let i = 0; i< quantity.length; i++) {
        FetchComments(quantity[i])
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
