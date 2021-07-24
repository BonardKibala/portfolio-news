import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Portfolio from './pages/portfolio';

const App = ()=>{
  return (
    <BrowserRouter>
  <Portfolio/>
    </BrowserRouter>
  )
}

export default App;