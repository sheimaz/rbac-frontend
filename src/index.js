import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter as MyRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Page404 from "./pages/404/404";
import "./assests/css/stylesheet.css";

import Permissions from "./pages/Permissions/Permission";
import Home from "./pages/Home/Home";
import Modules from "./pages/Modules/Modules";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login/Login";

const AppPrincipale = () => {
  const auth = {
    login: true,
    permissions: ["homeAcess", "moduleAccess", "permissionAccess"],
  };

  // const auth= true;
  //   return  <MyRouter>
  //      <Routes>
  //      <Route  path='/login' element={
  //     <Login/>
  //     } />
  //     <Route  path='*' element={
  //       <Page404/>
  //     } />
  //      <Route  path="/" element={
  //     <ProtectedRoute userToken={auth.login}
  //      />

  //       }>

  //         <Route  path="/" element={ <Home/> } />
  //         <Route  path="/modules" element={ <Modules/> } />
  //         <Route  path="/permissions" element={ <Permissions/> } />

  //          </Route>
  //   </Routes>

  //  </MyRouter>

  return (
    <MyRouter>
      <Routes>
        <Route path="/" element={
            <ProtectedRoute userToken={auth.login} isAllowed={true} />
          }
        >
            <Route  path="/" element={ <Home/> } />
            <Route  path="/modules" element={ 
              <ProtectedRoute userToken={auth.login} isAllowed={auth.permissions.includes("moduleAccess")}>
                <Modules />
              </ProtectedRoute>} />

            <Route  path="/permissions" element={  <ProtectedRoute userToken={auth.login} isAllowed={auth.permissions.includes("permissionAccess")}>
                <Permissions />
              </ProtectedRoute> } />

            </Route>

        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MyRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppPrincipale />
  </React.StrictMode>
);
