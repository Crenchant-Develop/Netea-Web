//core
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import { Config } from './components/GetUser';
import Header from './components/Header';

import Lorem from './components/Lorem';
import Footer from './components/Footer';

import Main from './pages/Main';
import Login from './pages/Login';
import { TestButton, Inventory } from './pages/Inventory';

//Assets
import './App.scss'; /* ◀ "CSS to SCSS" be has been converted. For SASS! */

class App extends React.Component {
  render() {
    return (
      <div className="App" id="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Login authURL={Config.authURL} />} />
            <Route path="/inventory" element={<TestButton />} />
          </Routes >
        <div className="section">
          <Lorem />
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div >
    );
  }
}

export default App;
