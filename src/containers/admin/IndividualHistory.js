import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBIcon,
} from "mdbreact";
import moment from "moment";

const IndividualHistory = ({ data,date }) => {
  return (
    <MDBCard className="mb-4">
      <MDBCardHeader>{moment(date).fromNow()}</MDBCardHeader>

      <MDBCardBody>
        <MDBListGroup className="list-group-flush">
          {data.map((med, id) => (
            <MDBListGroupItem key={id}>
              <b>{med.medicineName}</b>
              <MDBBadge color="success-color" pill className="float-right">
                {med.amount} ml
              </MDBBadge>
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default IndividualHistory;
