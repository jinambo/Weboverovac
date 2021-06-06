import React, { useState, useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Style sheets
import './styles/main.css'

// Components (partials)
import Header from './components/partials/Header'
import History from './components/partials/History'

// Components
import Home from './components/Home'
import List from './components/List'
import Search from './components/Search'
import About from './components/About'

const App = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('history')))
  }, [])

  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route path="/" exact render={ () => <Home /> } />
              <Route path="/rizikove-weby" exact render={ () => <List /> } />
              <Route path="/overit-web" exact render={ () => <Search setHistory={ setHistory } /> } />
              <Route path="/o-overovaci" exact render={ () => <About /> } />
          </Switch>
          { history ? <History history={ history } /> : ''}
        </Router>
    </div>
  );
}

export default App;
