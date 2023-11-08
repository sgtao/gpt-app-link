// for contents.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.createElement('div');
root.id = 'root-gpt-app-links';
document.body.appendChild(root);

ReactDOM.createRoot(document.getElementById('root-gpt-app-links')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
