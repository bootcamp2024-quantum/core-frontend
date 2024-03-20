import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../store/user/selectors";
import { ROUTES } from './routes';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const token = useSelector(selectIsLoggedIn);

  return token ? children : <Navigate to={ROUTES.LOGIN} />;
}
