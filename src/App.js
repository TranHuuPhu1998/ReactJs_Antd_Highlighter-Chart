import React from 'react';
import './App.css';
import HomePage from './page/Homepage/homepage.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
