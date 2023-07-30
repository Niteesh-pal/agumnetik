import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import {BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
