import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {createStudent} from '../store';

function AddStudent (props) {
    return(
        <div>
        <h3>Add A Student</h3>
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Enter Name:</label>
                <input
                    name='name'
                    type='text'
                />
            </div>
            <div>
                <label>Enter Email:</label>
                <input
                    name='email'
                    type='text'
                />
            </div>
            <div>
                <label>Select Campus</label>
                <select name='campus'>
                    {props.campuses.map(campus=>{
                        return(
                            <option key={campus.id} value={campus.id}>{campus.name}</option>
                        )
                    })}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)

}
    
    
const mapStateToProps = (state)=>{
    return(
    {students: state.students});
};




const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleSubmit: function (event) {
            event.preventDefault();
            const campusId = props.campuses.find(campus => campus.name === event.target.campus.value).id;
            dispatch(createStudent({
                name: event.target.name.value,
                email: event.target.email.value,
                campusId: event.target.campus.value
            },ownProps.history))
        }
    }
}

// 
// class AddStudent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state= {
//       name: '',
//       email:'',
//       campusId: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     if(event.target.name === "name"){
//       this.setState({name: event.target.value});
//     }else if(event.target.name === "email"){
//       this.setState({email: event.target.value});
//     }
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const newStudent = {
//       name: event.target.state.name,
//       email: event.target.state.email,
//       campusId: event.target.campus.value
//     };
//     this.props.createStudent(newStudent);
//     this.setState({
//       name: '',
//       email: ''});
// }

//   render() {
//     return (
//       <div>
//         <h1>Add Student Form</h1>
//           <form onSubmit= {this.handleSubmit}>
//             <div Name="form-group">
//                 <label>Name</label>
//                 <input type="text" 
//                 value={this.state.Name} 
//                 onChange={this.handleChange} 
//                 id="Name-field" name="Name" />
//             </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="text" 
//                 value={this.state.email} 
//                 onChange={this.handleChange} 
//                 id="email-field" name="email" />
//             </div>
//             <button type="submit">Add Student</button>
//         </form>
//         </div>
//     );
//   }
// }

// const mapStateToProps = (state)=>{
//   return(
//   { students: state.students,
//     campuses: state.campuses
//   }
// );
// };

// const mapDispatchToProps = {AddAStudent};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStudent);
      