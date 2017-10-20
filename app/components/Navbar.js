import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function SideBar(props) {

        return(

        <nav className="navbar">
            <div className="container">
                
                    <Link to="/" className="navbar-brand" >
                        <big>Home</big>  </Link>
                        <br/>

                    <Link to="/students" className="navbar-brand" >
                        <big>Students</big>  </Link>
                        <br/>

                    <Link to="/campuses" className="navbar-brand" >
                        <big>Campuses</big>  </Link>
                        <br/>

            </div>
        </nav>
    )};


const mapStateToProps = function(state) {
    return {
      campuses: state.campuses
    }
  }

  export default connect(mapStateToProps)(SideBar)