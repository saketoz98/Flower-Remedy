import { MDBJumbotron } from 'mdbreact';
import React, { useState } from 'react';
import { storage, db } from '../../firebase/firebase';
import Button from '../../components/utilities/DashboardButton';
import XLSX from 'xlsx';

const UploadJumbotron = ({ title }) => {

  const [file, setfile] = useState(null);
  const [error, setError] = useState('');
  const [data, setdata] = useState([]);

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
      console.log(uploadedFile);
      setfile(uploadedFile);
      console.log(typeof(file));

    } else {
      console.log('error');
      setError('File Format Invalid. Only Excel files are allowed!!');
    }
  };

  const handleUploadReq =  (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    console.log(rABS);
    console.log('start of upload');
    reader.onload =  (e) => {
      /* Parse data */
      console.log("On load fired")
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      setdata(data);
      console.log(JSON.stringify(data, null, 2));
      console.log(typeof(data));
      console.log(data[0]);
      db.collection("sheets").add({data : data}).then(()=>{
        console.log("Added");
      }).catch((e)=>{
        console.log(e);
      });

    };
    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    };


  };


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

          <input type='file' onChange={handlefile} />
          
          <Button
            color='blue'
            size='lg'
            disabled={error || file === null ? true : false}
            onClick = {handleUploadReq}
          >
            Upload File
          </Button>
      </MDBJumbotron>
    </React.Fragment>
  );
};

export default UploadJumbotron;
