import React from 'react'
import ReactDOM from 'react-dom'
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import {StateContextProvider} from './contexts/ResultContextProvider'

ReactDOM.render( 
  <StateContextProvider>
    <Router>
        <App />
    </Router>
  </StateContextProvider>,
  document.getElementById('root'))