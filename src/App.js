import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import Products from './Components/Products.js';
import About from './Components/About.js';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
        <BrowserRouter>
            <switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/products" component={Products}/>
            </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
