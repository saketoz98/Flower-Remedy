import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/admin";
import Spinner from "../../components/utilities/Spinner";
import BreadcrumSection from "./BreadcrumSection";
import MedicinesChart from "../../components/Admin/MedicinesChart";

const UserDetails = (props) => {
  const { loading, getUserDetails, userMedCount, userDetails } = useContext(
    AdminContext
  );
  useEffect(() => {
    getUserDetails(props.match.params.uid);
  }, []);

  const medicinesSection =
    loading || userDetails == null ? (
      <Spinner />
    ) : (
      <MedicinesChart  medicines = {userMedCount}/>
      
    );

  return (
    <React.Fragment>
      {userDetails != null ? (
        <BreadcrumSection name={userDetails.name} id={props.match.params.uid}/>
      ) : null}
      {medicinesSection}
    </React.Fragment>
  );
};

export default UserDetails;
