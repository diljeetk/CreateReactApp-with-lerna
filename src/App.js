import React, {
  Component
} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Component1 from './packages/component1/src/App';
import Component2 from './packages/component2/src/App';
import Component3 from './packages/component3/src/App';
import './App.css';

class App extends Component {
  render() {
    return ( <div className = "" >
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <a href = "/" >Mercury</a> 
          </Navbar.Brand> 
        </Navbar.Header> 
        <Nav >
        <NavItem eventKey = {1} href = "/site1" >Site 1 </NavItem> 
        <NavItem eventKey = {2} href = "/site2" >Site 2</NavItem> 
        <NavItem eventKey = {3} href = "/site3" >Site 3</NavItem> 
        </Nav> 
      </Navbar> 
      <Router>
      <Switch>
      <Route exact path = '/' component = {Component1} /> 
      <Route exact path = '/site1'
      component = {
        Component1
      }
      /> 
      <Route exact path = '/site2'
      component = {
        Component2
      }
      /> 
      <Route exact path = '/site3'
      component = {
        Component3
      }
      /> 
      </Switch> 
      </Router> 
      </div>
    );
  }
}

export default App;