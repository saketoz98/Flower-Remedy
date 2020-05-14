import React , { useState} from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Button from "../../components/utilities/DashboardButton";
import {functions} from "../../firebase/firebase";

const MakeAdmin = (props) => {
    const [input, setinput] = useState('');

    const makeAdmin =  (e)=>{
        e.preventDefault();
        console.log(input);
        const addAdminRole = functions.httpsCallable("addAdminRole");
        addAdminRole({email:input}).then((result)=>{
            console.log("Function Called");
            console.log(result);
        }).catch(err=>{
            console.log(err);
        })
        
    }

    const onChangeHandler = (e)=>{
        setinput(e.target.value);
    }


  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <form onSubmit={makeAdmin}>
            <input type="email" placeholder="User email" id="admin-email" required onChange={onChangeHandler} />
            <button className="btn-small yellow darken-2 z-depth-0">Make admin</button>
            </form>
        </MDBCardBody>
    </MDBCard>
  )
}

export default MakeAdmin;

