import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { ReactNode } from "react";

interface IRestrictedRouteProps {
  component: ReactNode;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<IRestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
