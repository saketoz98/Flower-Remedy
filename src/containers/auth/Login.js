import {  MDBContainer, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from "mdbreact";
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import Button from '../../components/utilities/DashboardButton';

const Login = (props) => {
  const { uid, login } = useContext(AuthContext);
  return (
    <MDBContainer>
      <MDBModal isOpen={props.modal} toggle={props.toggle}>
        <MDBModalHeader toggle={props.toggle}>Login</MDBModalHeader>
        <MDBModalBody>
          <Button color="blue" onClick={login}>
            <MDBIcon fab icon="google" className="mr-3" />
            Login With Google
          </Button>
        </MDBModalBody>
        <MDBModalFooter>
          <Button color="green" onClick={props.toggle}>
            Close
          </Button>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default Login;
