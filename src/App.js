import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import './App.scss';


class App extends Component {
 
  render() {
    return (
    <div className="full-body">
      <Router>
      <div className="header">  
      {/* <div className="header-top">
          <a 
            href="https://www.linkedin.com/in/david-calderwood/" 
            target="_blank" 
            rel="noopener noreferrer">David Calderwood
          </a>
        </div>

        <div className="header">
        <div className="header-links">
          <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="home-link">
                  <h3>Home</h3>
              </div>
            </Link>

            <Link to="/favorites" style={{ textDecoration: 'none' }}>
              <div className="favorites-link">
                <h3>Favorites</h3>
              </div>
            </Link>

            <Link to="/about" style={{ textDecoration: 'none' }}>
              <div className="about-link">
                  <h3>About</h3>
              </div>
            </Link>
          </div>
        </div> */}
          
          
          <div className="header-links">
            <div className="right-link">
              <a 
                href="https://www.linkedin.com/in/david-calderwood/" 
                target="_blank" 
                rel="noopener noreferrer">David Calderwood
              </a>
            </div>

              <div className="left-links">
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <div className="home-link">
                      <h3>Home</h3>
                  </div>
                </Link>

                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                  <div className="favorites-link">
                    <h3>Favorites</h3>
                  </div>
                </Link>

                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <div className="about-link">
                      <h3>About</h3>
                  </div>
                </Link>
                {/* <div className="home-link">Home</div>
                <div className="favorites-link">Favorites</div>
                <div className="about-link">About</div> */}
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