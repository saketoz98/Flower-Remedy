import React, { useState, useContext } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import { AuthContext } from "../../context/auth";
import Login from "../../containers/auth/Login";

const TopNavigation = () => {
  const { uid, isAdmin, toggle, modal, logout } = useContext(AuthContext);
  const [collapse, setcollapse] = useState(false);
  const onClick = () => {
    setcollapse(!collapse);
  };

  return (
    <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
      <MDBNavbarToggler onClick={onClick} />
      <MDBCollapse isOpen={collapse} navbar>
        <MDBNavbarNav center="true" className="title">
          <div className="text-center">
            <b>Flower Remedy</b>
          </div>
        </MDBNavbarNav>
        <MDBNavbarNav right className="topNavbar">
          <MDBNavItem className="NavItem">
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
          </MDBNavItem>
          <MDBNavItem className="NavItem">
            <MDBNavLink to="/" exact={true} activeClassName="activeClassTopNav">
              {" "}
              <MDBIcon icon="chart-pie" className="mr-3" />
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="NavItem">
            {isAdmin ? (
              <MDBNavLink to="/admin" activeClassName="activeClassTopNav">
                <MDBIcon icon="user-tie" className="mr-3" /> Admin Analysis
              </MDBNavLink>
            ) : null}
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default TopNavigation;
