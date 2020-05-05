import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import UploadJumbotron from './dashboardElements/uploadJumbotron';
import DownloadJumbotron from './dashboardElements/downloadJumbotron';

const Dashboard = props => {
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol md='6'>
          <UploadJumbotron />
        </MDBCol>
        <MDBCol md='6'>
          <DownloadJumbotron />
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default Dashboard;
