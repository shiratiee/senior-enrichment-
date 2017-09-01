
import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {AddCampus} from '../reducers/campuses';



// export default class AllCampuses extends Component {
//     constructor() {
//         super()
//     }
//     render() {
//         return (
//             <h1> All campuses </h1>
//         )
//     }
// }

class AddCampus extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                pictureUrl:''
            }
    
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
    
        handleChange(event) {
            if(event.target.name === 'name'){
              this.setState({name: event.target.value});
            }else if(event.target.name === 'pictureUrl'){
              this.setState({pictureUrl: event.target.value});
            }
          }
    
        handleSubmit(evt){
            evt.preventDefault()
            this.props.addCampus(this.state.name, this.state.pictureUrl)
            this.setState({
                name : ''
            });
        }
    
        render() {
            return (
                <div>		
                    <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                <label>Image URL</label>
                <input 
                    type='text'
                    onChange={ this.handleChange}
                    value={ this.state.pictureUrl }
                />
                </div>
                <div className="form-group">
                <label>Campus Name</label>
                <input 
                    type='text'
                    onChange={ this.handleChange}
                    value={ this.state.name }
                />
                </div>
                <button>Add New Campus </button>
              </form>
          </div>
            );
        }
    }
    
    const mapStateToProps = (state)=>{
        return(
        {students: state.students}
      );};
      
      const mapDispatchToProps = {};
      
      
      export default connect(mapstate, mapDispatch)(AddCampuses);
      
    