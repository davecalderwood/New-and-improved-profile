import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import './App.scss';


class App extends Component {
 
  render() {
    return (
    <div class="full-body">
      <Router>
      <div className="App">  
        <div className="header">
        <div className="header-links">
          <Link to="/">
              <div className="home">
                  <h3>Home</h3>
              </div>
            </Link>

            <Link to="/favorites">
              <div className="favorites">
                <h3>Favorites</h3>
              </div>
            </Link>

            <Link to="/about">
              <div className="about">
                  <h3>About</h3>
              </div>
            </Link>
          </div>
        </div>
          
        </div>

        <div className="main">
          {/* Route paths */}
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/about" component={About} />
        
        </div>
      </Router>
    </div>
    );
  }
}

export default App;