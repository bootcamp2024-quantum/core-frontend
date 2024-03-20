import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const  token  = null;

  return token ? children : <Navigate to="/login" />;
}
