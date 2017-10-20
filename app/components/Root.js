
// import external dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import components / store
import { fetchStudents, fetchCampuses } from '../store';
import store from '../store';
import Campuses from './Campuses';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';
import Students from './Students';
import Campus from './Campus'
import Student from './Student'
import Navbar from './Navbar';
import Home from './Home'



export default class Root extends Component {

  componentDidMount () {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    return (
      <Router>
      <div>
      <h1>~*~*~*Welcome to the Interplanetary Academy of JavaScript!~*~*~*</h1>
      <Navbar />
      <div>
        <div>
          <main>
          <Switch>
            <Route exact path="/campuses" component={Campuses} />
            <Route path='/campuses/:campusId' component={Campus} />
            <Route exact path="/students/:studentId" component = {Student} />

            <Route exact path="/campuses/AddCampus" component={AddCampus} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/AddStudent" component={AddStudent} />
            <Route exact path='/' component={Home} />
            </Switch>
            </main>
          </div>
        </div>
      </div>
      </Router>

    );
  }
}