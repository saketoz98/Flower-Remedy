import React from 'react';
import logo from '../../assets/FlowerRemedy.png';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div className='sidebar-fixed position-fixed'>
      <a href='#!' className='logo-wrapper waves-effect'>
        <img alt='MDB React Logo' className='img-fluid' src={logo} />
      </a>
      <MDBListGroup className='list-group-flush'>
        <NavLink exact={true} to='/' activeClassName='activeClass'>
          <MDBListGroupItem>
            <MDBIcon icon='chart-pie' className='mr-3' />
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to='/login' activeClassName='activeClass'>
          <MDBListGroupItem>
            <MDBIcon icon='user' className='mr-3' />
            Login
          </MDBListGroupItem>
        </NavLink>
        <NavLink to='/register' activeClassName='activeClass'>
          <MDBListGroupItem>
            <MDBIcon icon='user-plus' className='mr-3' />
            Register
          </MDBListGroupItem>
        </NavLink>
        <NavLink to='/appointment' activeClassName='activeClass'>
          <MDBListGroupItem>
            <MDBIcon icon='calendar-check' className='mr-3' />
            Make Appointment
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default TopNavigation;
