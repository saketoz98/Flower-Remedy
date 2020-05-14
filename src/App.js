import React from "react";
import TopNavigation from "./components/navigation/topNavigation";
import SideNavigation from "./components/navigation/sideNavigation";
import { Route, Switch, useHistory } from "react-router-dom";
import Dashboard from "./containers/dashboard";
import "./App.css";
import AuthProvider from "./context/auth";
import Login from "./containers/auth/Login";
import AdminDashboard from "./containers/admin/AdminDashboard";
import AdminContextProvider from "./context/admin";
import UserDetails from "./containers/admin/UserDetails";
import UserHistory from "./containers/admin/UserHistory";
import UserHistoryProvider from "./context/history";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <UserHistoryProvider>
      <AdminContextProvider>
        <AuthProvider>
          <div className="flexible-content">
            <TopNavigation />
            <SideNavigation />
            <main id="content" className="p-5">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <PrivateRoute path="/admin" exact component={AdminDashboard} />
                <PrivateRoute path="/admin/:uid" exact component={UserDetails} />
                <PrivateRoute path="/admin/:uid/history" component={UserHistory} />
              </Switch>
            </main>
          </div>
        </AuthProvider>
      </AdminContextProvider>
    </UserHistoryProvider>
  );
}

export default App;
