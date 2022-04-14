import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('https://git.heroku.com/survery-demo-app.git/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}

export default App;

function Form() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('https://git.heroku.com/survery-demo-app.git/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
  <html>
      <head> 
        <meta charset="utf-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <title>Test</title> 
        
    </head> 
    <body> 
      <div id="wrapper" data-tf-widget="v8vIyHFe" data-tf-inline-on-mobile data-tf-medium="snippet" ></div> 
      <script src="//embed.typeform.com/next/embed.js"></script> 
    </body> 
  </html>
  );
}








