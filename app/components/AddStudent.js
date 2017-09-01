import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {AddStudent} from '../reducers/students';

class AddStudent extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                email:''
            }
    
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
    
        handleChange(event) {
            if(event.target.name === "name"){
              this.setState({name: event.target.value});
            if(event.target.email === "email"){
              this.setState({email: event.target.value});
            }
            }
          }
    
        handleSubmit(evt){
            evt.preventDefault()
            this.props.addStudent(this.state.name, this.state.email)
            this.setState({
                name : event.target.value,
                email: event.target.value
            });
        }
    
        render() {
            return (
                <div>		
                    <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                <label>Student Name</label>
                <input 
                    type='text'
                    onChange={ this.handleChange}
                    value={ this.state.name }
                />
                </div>
                <div className="form-group">
                <label>Student Email</label>
                <input 
                    type='text'
                    onChange={ this.handleChange}
                    value={ this.state.email }
                />
                </div>
                <button>Add Student</button>
              </form>
          </div>
            );
        }
    }
    
    const mapStateToProps = (state)=>{
        return(
        {students: state.students,campuses: state.campuses}
      );};
      
      const mapDispatchToProps= {addstudent};
      
      
      export default connect(mapstate, mapDispatch)(AddStudent);
      