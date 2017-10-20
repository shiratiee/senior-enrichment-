
import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {AddACampus} from '../reducers/campuses';


function mapStateToProps(state){
    return {
        campuses : state.campuses
    };
}
  
function mapDispatchToProps(dispatch, ownProps){
return {
    handleSubmit: function(event){
    event.preventDefault();
    dispatch(addACampus({name: event.target.name.value, 
        image: event.target.image.value}, 
        ownProps.history));
    }
  };
}


    

function AddCampus (props) {
return(
    <div>
        <h3>Add Campus!</h3>
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Enter Name:</label>
                <input
                    name='name'
                    type='text'
                />
            </div>
            <div>
                <label>Enter Campus Photo Link</label>
                <input
                    name='url'
                    type='text'
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}

    
    
      
export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
      
    