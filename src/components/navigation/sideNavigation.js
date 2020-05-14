import React, { useState, useContext } from "react";
import logo from "../../assets/FlowerRemedy.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
import Login from "../../containers/auth/Login";
import { AuthContext } from "../../context/auth";

const TopNavigation = (props) => {
  const { uid, isAdmin, toggle, modal, logout } = useContext(AuthContext);
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <MDBListGroupItem>
          {uid ? (
            <div onClick={logout}>
              <MDBIcon icon="calendar-check" className="mr-3" />
              Logout
            </div>
          ) : (
            <div onClick={toggle}>
              <MDBIcon icon="user" className="mr-3" />
              Login
            </div>
          )}

          {modal ? <Login toggle={toggle} modal={modal} /> : null}
        </MDBListGroupItem>
        
        <NavLink to="/appointment" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="calendar-check" className="mr-3" />
            Make Appointment
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/admin" activeClassName="activeClass">
          {isAdmin ? (<MDBListGroupItem>
            <MDBIcon icon="user-tie" className="mr-3" /> Admin Analysis
          </MDBListGroupItem>) : null
          }
          
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default TopNavigation;
