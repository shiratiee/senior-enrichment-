import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Campus(props){
    return(
        <div>
            <h2>{props.campus.name}</h2> 
            <img src={props.campus.image}/>
            <ul>
                {props.students.map(student=>{
                    return (
                        <li key={student.id}>
                            <div>
                                <Link to={`/students/${student.id}`}>
                                <h4>{student.name}</h4>
                                <p>{student.email}</p>
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
           
        </div>
    )
}


const mapStateToProps  = function (state, ownProps) {
    const campusId = Number(ownProps.match.params.campusId);
    return {
        campus: state.campuses.find(campus => campus.id=== campusId),
        students: state.students.filter(student => student.campusId=== campusId) 
    };
}

export default connect(mapStateToProps)(Campus)