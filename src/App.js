import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Style sheets
import './styles/main.css'

// Components (partials)
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

// Components
import Home from './components/Home'
import List from './components/List'
import Search from './components/Search'
import About from './components/About'

const App = () => {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route path="/" exact render={ () => <Home /> } />
              <Route path="/rizikove-weby" exact render={ () => <List /> } />
              <Route path="/overit-web" exact render={ () => <Search /> } />
              <Route path="/o-overovaci" exact render={ () => <About /> } />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
