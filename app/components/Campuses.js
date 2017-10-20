import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


  const mapStateToProps = function (state) {
    return {
      campuses: state.campuses,
      
    };
  };
  
  const Campuses = (props)=> {
      return(
        <ul>
        <NavLink to={`/AddCampus`}>Add Campus</NavLink>
        <h3>ALL CAMPUSES </h3>
        {props.campuses.map(campus => {
            return (
                <div key={campus.id}>
                <img src= { campus.image } />
                    <NavLink  to={`/campuses/${campus.id}`}>
                   
                    <h4><span>{campus.name}</span></h4>
                    </NavLink>
                </div>
            )
        })}
    </ul>
)
}

    


  
export default connect(mapStateToProps)(Campuses);
