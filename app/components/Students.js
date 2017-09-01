import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import React from 'react';

const Students = (props) => {


  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          props.students.map(student => (
            <tr key={student.id}>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <NavLink to={`/Students/${student.id}`}>
              <td>
              <td>{ student.name }</td>
              </td>
              <span>{ student.email }</span>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Songs;

const mapStateToProps = function (state) {
  return {
    student: state.students,
    campuses: state.campuses
  };
};



export default withRouter(connect(mapProps)(Students));