import { MDBJumbotron } from "mdbreact";
import React, { useState, useContext } from "react";
import { auth, storage, db } from "../../firebase/firebase";
import Button from "../../components/utilities/DashboardButton";
import XLSX from "xlsx";
import { AuthContext } from "../../context/auth";

const UploadJumbotron = ({ title }) => {
  const { uid } = useContext(AuthContext);
  const [file, setfile] = useState(null);
  const [error, setError] = useState("");
  const [data, setdata] = useState([]);

  const handlefile = (e) => {
    const uploadedFile = e.target.files[0];
    // console.log(uploadedFile.type);
    const type = uploadedFile.type;
    if (
      type === "application/vnd.ms-excel" ||
      type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      type === "application/vnd.ms-excel.sheet.macroEnabled.12"
    ) {
      // console.log(uploadedFile.lastModifiedDate.getDate());
      setfile(uploadedFile);
      // console.log(uploadedFile);
    } else {
      console.log("error");
      setError("File Format Invalid. Only Excel files are allowed!!");
    }
  };

  const handleUploadReq = (e) => {
    e.preventDefault();
    //Current user attributes
    const user = auth.currentUser;
    let userData = {};
    if (user != null) {
      userData = {
        name: user.displayName ? user.displayName : "NA",
        email: user.email,
      };
    
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    // console.log(rABS);
    // console.log("start of upload");
    reader.onload = (e) => {
      /* Parse data */
      // console.log("On load fired");
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      setdata(data);
      // console.log(uid);
      db.collection("sheets")
        .doc(uid)
        .set({ data: data, date: Date.now(), user: userData })
        .then(() => {
          // console.log("Added");
          setfile(null);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }else{
    // console.log("No Permission");
    alert("You need to log in before performing upload!!");
  }
  };

  return (
    <React.Fragment>
      <MDBJumbotron>
        <h1 className="h1-responsive">Upload File</h1>
        <p className="lead">
          Fill the details of the questions given in Questionaire and Upload the Excel file using below link.
          Do not change the order of questions in the downloaded excel file.
        </p>
        <hr className="my-2" />
        <p>
          Only Excel Formats are accepted. You need to Login before you upload !!
        </p>

        <input type="file" onChange={handlefile} />

        <Button
          color="blue"
          size="lg"
          disabled={error || file === null || uid===null ? true : false}
          onClick={handleUploadReq}
        >
          Upload File
        </Button>
      </MDBJumbotron>
    </React.Fragment>
  );
};

export default UploadJumbotron;
