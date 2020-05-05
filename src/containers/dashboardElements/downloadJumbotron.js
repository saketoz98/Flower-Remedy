import { MDBJumbotron } from 'mdbreact';
import React, { useState } from 'react';
import { storage } from '../../firebase/firebase';
import Button from '../../components/utilities/DashboardButton';
import axios from 'axios';

const Jumbotron = ({ title }) => {
  const handleDownloadReq = () => {
    const fileRef = storage.ref('images/Questionaire.xlsx');
    fileRef
      .getDownloadURL()
      .then(function(url) {
        axios({
          url: url,
          method: 'GET',
          responseType: 'blob', // important
          headers: { Accept: 'application/vnd.ms-excel' }
        }).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          console.log('Downloaded');
        });
      })
      .catch(function(error) {
        // Handle any errors
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <MDBJumbotron>
        <h1 className='h1-responsive'>Download File</h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-2' />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger MDBContainer.
        </p>

        <Button color='blue' size='lg' onClick={handleDownloadReq}>
          Download File
        </Button>
      </MDBJumbotron>
    </React.Fragment>
  );
};

export default Jumbotron;
