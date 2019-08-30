// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Components/Header';
// import Body from './Components/Body';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>
              Lease Your Office Space
            </Link>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={'/'} className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/create'} className='nav-link'>
                    Create Listing
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/index'} className='nav-link'>
                    Current Listings
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{' '}
          <br />
          <h2>Welcome to Office Space As A Service</h2> <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
