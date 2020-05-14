import React, { useContext, useEffect } from "react";
import { UserHistoryContext } from "../../context/history";
import { withRouter } from "react-router-dom";
import Spinner from "../../components/utilities/Spinner";
import IndividualHistory from "./IndividualHistory";

const HistoryDetails = (props) => {
  const { getHistoryofUser, userHistory, loading } = useContext(
    UserHistoryContext
  );

  useEffect(() => {
    getHistoryofUser(props.match.params.uid);
  }, []);

  const history =
    ((loading === true ||
    userHistory.length === 0 )&&
    (loading === false && userHistory.length === 0)) ? (
      <Spinner />
    ) : (
      userHistory.map((rec, index) => (
        <IndividualHistory
          data={rec.history}
          key={index}
          date={rec.createdAt}
        />
      ))
    );

  return <div>{history}</div>;
};

export default withRouter(HistoryDetails);
