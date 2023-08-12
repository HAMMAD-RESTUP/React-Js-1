import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Navbar from './components/navbar'
import reportWebVitals from './reportWebVitals';
import Banner from './components/banner';
import Popular from './components/popular';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    <Popular/>
  

 
  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();