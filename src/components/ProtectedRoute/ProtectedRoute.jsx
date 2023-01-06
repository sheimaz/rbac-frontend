import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({userToken, children, isAllowed}) => {
    console.log(typeof isAllowed, '  ', isAllowed);
    console.log(userToken , 'exists');

if(!userToken) {return <Navigate to="/login" /> }

if (!isAllowed) {
    console.log(typeof isAllowed, '  ', isAllowed);
    return <h2>Unauthorized (Protected: Permission Required)</h2>;
  }
  return children? children:<Outlet/>
// return <Outlet />


};

export default ProtectedRoute;