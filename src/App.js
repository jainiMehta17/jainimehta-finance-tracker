
import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import AddTransaction from './components/AddTransaction';
import TransactionHomePage from './components/TransactionHomePage';
import ShowTransaction from './components/ShowTransaction';
import ViewTransaction from './components/ViewTransaction';
import EditTransaction from './components/EditTransaction';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import GetMail from './components/GetMail';
import AllLinksToPages from './components/AllLinksToPages';
import Authguard from './components/Authguard';

// import UserComments from './components/UserComments';

function App(){
 return(
  <Routes>
    <Route exact path='/transaction/home' element={<Authguard Component={TransactionHomePage}  />}/>
    <Route exact path='/transaction/add-transaction' element={<Authguard Component={AddTransaction}  />}/>
    <Route exact path='/transaction/show-transactions' element={<Authguard Component={ShowTransaction}  />}/> 
    <Route exact path='/transactions/:id' element={<Authguard Component={ViewTransaction}  />}/>
    <Route exact path='/transaction/edit-transaction/:id' element={<Authguard Component={EditTransaction} isublic />}/>
    <Route exact path='/register' element={<Authguard Component={Register} isPublic />} />
    <Route exact path='/login' element={<Authguard Component={Login} isPublic />}/>
    <Route exact path='/home'  element={<Authguard Component={Home}  />}/>
    <Route exact path='/financeTracker' element={<Authguard Component={GetMail} isPublic />}/>
    <Route exact path='/financeTrackerAllLinks' element={<Authguard Component={AllLinksToPages} isPublic />}/>

  </Routes>
 )

}
export default App;