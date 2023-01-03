import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({userToken, children}) => {
 
if(!userToken) return <Navigate to="/login" />
return children? children:<Outlet />

};

export default ProtectedRoute;