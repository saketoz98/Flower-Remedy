import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdbreact';

class TopNavigation extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <MDBNavbar className='flexible-navbar' light expand='md' scrolling>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav center='true'>
            <div className='text-center'>
              <b>Flower Remedy</b>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavigation;
