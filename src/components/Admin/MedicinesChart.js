import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';

const MedicinesChart = ({medicines}) => {
    const chart = Object.entries(medicines).map((entry,index) => {
        const key = entry[0];
        const val = entry[1];
        const essentialMed =
          val >= 2 ? (
            <MDBListGroupItem key={index}>
              {key}
              <MDBBadge color="success-color" pill className="float-right">
                {val}
              </MDBBadge>
            </MDBListGroupItem>
          ) : null;
        return <div>{essentialMed}</div>;
      })
  return (
      
    <React.Fragment>
      <MDBCard className="mb-4">
        <MDBCardBody>
          <MDBListGroup className="list-group-flush">
            {chart}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>
  );
};

export default MedicinesChart;