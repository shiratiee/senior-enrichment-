
// import external dependencies
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import components / store
import { fetchStudents, fetchCampuses } from '../reducers';
import store from '../store';
import Campuses from './Campuses';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';
import Students from './Students';


export default class Root extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="container-fluid">
        <main>
          <Switch>
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/campuses/AddCampus" component={AddCampus} />
            <Route exact path="/student" component={Students} />
            <Route exact path="/students/AddStudent" component={AddStudent} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default connect(mapProps, mapDispatch)(Root);