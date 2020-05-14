import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdbreact";
import Button from "../../components/utilities/DashboardButton";
import { Link } from "react-router-dom";
import { UserHistoryContext } from "../../context/history";

const UserHistoryHeader = ({ toggle }) => {
  return (
    <React.Fragment>
      <MDBCard className="mb-5">
        <MDBCardBody
          id="breadcrumb"
          className="d-flex align-items-center justify-content-between"
        >
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>History</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <Button color="purple" onClick={toggle}>
            <MDBIcon
              icon="plus"
              className="ml-1"
              style={{ marginRight: "4px" }}
            />{" "}
            Add History
          </Button>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>
  );
};

export default UserHistoryHeader;
