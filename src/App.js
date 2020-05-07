import React from 'react';
import TopNavigation from './components/navigation/topNavigation';
import SideNavigation from './components/navigation/sideNavigation';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/dashboard';
import './App.css';

function App() {
  return (
    <div className='flexible-content'>
      <TopNavigation />
      <SideNavigation />
      <main id='content' className='p-5'>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/login' exact component={Dashboard} />
          <Route path='/register' exact component={Dashboard} />

        </Switch>
      </main>
    </div>
  );
}

export default App;
