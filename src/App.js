import React from 'react';
import RegisterUserComponent from './components/registerusercomponent'
import LoginUserComponent from './components/loginusercomponent'
import AssetsComponent from './components/assetscomponent'
import PurchaseDetailsComponent from './components/purchasedetailscomponent'
import HomePageComponent from './components/homepagecomponent'
import EmployeeComponent from './components/employeecomponents'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div>
       <BrowserRouter>
          <Route exact path="/registerusercomponent" component={RegisterUserComponent} />
          <Route exact path="/loginusercomponent" component={LoginUserComponent} />
          <Route exact path="/" component={HomePageComponent} />
          <Route exact path="/assetscomponent" component={AssetsComponent} />
          <Route exact path="/purchasedetailscomponent" component={PurchaseDetailsComponent} />
          <Route exact path="/employeecomponents" component={EmployeeComponent} />
        </BrowserRouter>
    </div>
  );
}

export default App;
