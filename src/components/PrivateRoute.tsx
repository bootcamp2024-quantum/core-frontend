import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectToken } from "../store/selectors";
import {ROUTES} from './routes'

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { token } = useSelector(selectToken);

  return token ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />;
}
