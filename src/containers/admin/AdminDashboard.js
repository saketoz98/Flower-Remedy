import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/admin";
import Spinner from "../../components/utilities/Spinner";
import UsersList from "../../components/Admin/UsersList";
import moment from "moment";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBRow, MDBCol,MDBBtn } from "mdbreact";
import MakeAdmin from "./MakeAdmin";

const AdminDashboard = (props) => {
  const { users, getUsers, loading } = useContext(AdminContext);

  useEffect(() => {
    getUsers();
  }, []);

  const table = loading ? (
    <Spinner />
  ) : (
    <MDBCard>
      <MDBCardBody>
        <MDBTable hover>
          <MDBTableHead color="blue-grey lighten-4">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {users.map((user, index) => {
              return (
                  <tr>
                    <td>{index}</td>
                    <td>{user.user.name}</td>
                    <td>{user.user.email}</td>
                    <td>{moment(user.date).format("MMM Do YY")}</td>
                    <td><Link to={`/admin/${user.uid}`}><MDBBtn style={{
                      borderRadius : "10px",

                    }} color="secondary">Analyse</MDBBtn></Link></td>
                  </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
  return <React.Fragment>
    <MakeAdmin />
    {table}</React.Fragment>;
};

export default AdminDashboard;
