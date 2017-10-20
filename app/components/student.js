import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { fetchstudent } from '../reducers'


function Student(props){
  return(
      <div>
          <h1>{props.student.name}</h1> 
          <h1>{props.student.email}</h1>
         
      </div>
  )
}


const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  const selectedStudent = state.students.find(student => student.id === studentId) 
  return {
      student: selectedStudent,
      campus: state.campuses.find(campus => campus.id === selectedStudent.campusId)
  };
}

export default(connect(mapStateToProps)(Student));