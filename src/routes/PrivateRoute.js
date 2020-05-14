import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../context/auth";


const PrivateRoute = ({  component: Component, ...rest }) => {
    const {isAdmin} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAdmin === true ? (
          <div>
              <Component {...props} />
         </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
