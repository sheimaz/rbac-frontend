import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, BrowserRouter as MyRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Page404 from './pages/404/404';
import './assests/css/stylesheet.css'

import Permissions from './pages/Permissions/Permission';
import Home from './pages/Home/Home'
import Modules from './pages/Modules/Modules'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';

const AppPrincipale = () => {

    const auth= true;
  return  <MyRouter>
     <Routes>
     <Route  path='/login' element={ 
    <Login/>
    } />
    <Route  path='*' element={ 
      <Page404/>
    } />
     <Route  path="/" element={
    <ProtectedRoute userToken={auth} />

      }>
        
        <Route  path="/" element={ <Home/> } /> 
        <Route  path="/modules" element={ <Modules/> } /> 
        <Route  path="/permissions" element={ <Permissions/> } /> 

        git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

        
         </Route>
  </Routes>

 </MyRouter> 



  /* <Route  path="/" element={
    <ProtectedRoute userToken={auth}>

  <Home/>
  </ProtectedRoute>

  
  } /> 

  <Route  path='/modules' element={   <ProtectedRoute userToken={auth}>
 <Modules/>   </ProtectedRoute>
} />

  <Route  path='/permissions' element={   <ProtectedRoute userToken={auth}>
 <Permissions/>  </ProtectedRoute>
} />

<Route  path='*' element={ 
 <Page404/>
} />

<Route  path='/login' element={ 
 <Login/>
} />

 </Routes>
 </MyRouter> */
 
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    


    <AppPrincipale />
  </React.StrictMode>
);