import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import PdfView from './components/PdfView'
import NavLink from './components/NavLink'

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-2">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink to="/" name="Home" />
              <NavLink to="/about" name="About" />
              <NavLink to="/pdf-view" name="PDF View" />              
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pdf-view">
            <PdfView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

