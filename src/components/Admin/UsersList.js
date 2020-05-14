import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";

const ListGroupPage = ({ user }) => {
  return (
    <MDBContainer>
      <Link to={`/admin/${user.uid}`} >
        <MDBListGroup style={{ width: "22rem" }}>
          <MDBListGroupItem active href="#">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{user.user.name}</h5>
              <small>{moment(user.date).format("MMM Do YY")}</small>
            </div>

            <small>{user.user.email}</small>
          </MDBListGroupItem>
        </MDBListGroup>
      </Link>
    </MDBContainer>
  );
};

export default ListGroupPage;
