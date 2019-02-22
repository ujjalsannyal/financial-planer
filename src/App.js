import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import IncomeComponent from './component/IncomeComponent';
import ExpenseComponent from './component/ExpenseComponent';
import Dashboard from './component/Dashboard';
import Error from './component/Error';
import ButtonAppBar from './menu';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/income">Income</Link>
              </li>
              <li class="nav-item">
                <Link to="/expense">Expense</Link> 
              </li>
            </ul>
          </div>
        </nav>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/income" component={IncomeComponent} />
            <Route path="/expense" component={ExpenseComponent} />
            <Route exact component={Error} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
