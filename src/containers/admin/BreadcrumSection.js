import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Button from "../../components/utilities/DashboardButton";
import { Link } from "react-router-dom";

const BreadcrumSection = ({id, name}) => {
  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>{name}</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Analysis</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBFormInline className="md-form m-0">
                <Link to={`/admin/${id}/history`}><Button color="purple" >History</Button></Link>
            </MDBFormInline>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;

