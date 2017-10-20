import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = function (state) {
  return {
    students: state.students,
  };
};

const Students = (props) => {
return (
  <ul>
      <NavLink to={`/AddStudent`}>Add Student</NavLink>
      <h3> ALL STUDENTS </h3>
      {props.students.map(student => {
        return (
          <div key={student.id}>
            <NavLink to={`/students/${student.id}`}>
            <h4><span>{student.name}</span></h4>
            </NavLink>
            <h4><span>{student.email}</span></h4>
            </div>
          )
      })}
  </ul>
)
}

export default connect(mapStateToProps)(Students);