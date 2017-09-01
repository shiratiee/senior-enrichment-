import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Campuses = (props)=> {
        return (
          <div>
            <h1>Campuses</h1>
            <div className="row">
            <Navlink to {'/AddCampus'} >Add New Campus </Navlink>
              {props.campuses.map(campus => (
                <div className="col-xs-4" key={ campus.id }>
                <NavLink to={`/campuses/${campus.id}` className="thumbnail" </Navlink>
                    <img src={ campus.imageUrl } />
                    <div className="caption">
                      <h2>
                        <span>{ campus.name }</span>
                      </h2>
                    </div>
                </div>
              ))
            }
            </div>
          </div>
        );
    };

      


const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(Campuses));
