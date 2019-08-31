import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  // BrowserRouter as Router,
   Switch, 
   Route,
   Link } from 'react-router-dom';

import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';
import HeaderNav from './components/HeaderNav';
import { Button } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div
        style={
          {
            // backgroundColor: 'lightgrey',
            // height: '100vh',
            // padding: '20px'
          }
        }
      >
        {/* <Router> */}
        <div className='container'>
          <HeaderNav />
          <br />
          <h2>Welcome to Office Space As A Service</h2>{' '}
          <Link to='/create'>
            <Button variant='contained' style={{ margin: 20 }}>
              Add Listing
            </Button>
          </Link>
          <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
