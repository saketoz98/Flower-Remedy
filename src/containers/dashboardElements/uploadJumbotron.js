import { MDBJumbotron } from 'mdbreact';
import React, { useState } from 'react';
import { storage } from '../../firebase/firebase';
import Button from '../../components/utilities/DashboardButton';

const UploadJumbotron = ({ title }) => {
  const [file, setfile] = useState('');
  const [error, setError] = useState('');

  const handlefile = e => {
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile.type);
    const type = uploadedFile.type;
    if (
      type === 'application/vnd.ms-excel' ||
      type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      type === 'application/vnd.ms-excel.sheet.macroEnabled.12'
    ) {
      console.log('file set');
      setfile(imageFile => uploadedFile);
    } else {
      console.log('error');
      setError('File Format Invalid. Only Excel files are allowed!!');
    }
  };

  const handleUploadReq = e => {
    e.preventDefault();
    console.log('start of upload');
    // async magic goes here...
    if (file === '') {
      console.error(`not an image, the image file is a ${typeof file}`);
    }
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    //initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      snapShot => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      err => {
        //catches the errors
        console.log(err);
      }
    );
  };

  const handleDownloadReq = () => {};

  return (
    <React.Fragment>
      <MDBJumbotron>
        <h1 className='h1-responsive'>Upload File</h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-2' />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger MDBContainer.
        </p>

        <form onSubmit={handleUploadReq} encType='multipart/form-data'>
          <input type='file' onChange={handlefile} />
          <Button
            color='blue'
            size='lg'
            disabled={error || file === '' ? true : false}
          >
            Upload File
          </Button>
        </form>
      </MDBJumbotron>
    </React.Fragment>
  );
};

export default UploadJumbotron;
