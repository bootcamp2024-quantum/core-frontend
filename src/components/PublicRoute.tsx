import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectToken } from "../store/user/selectors";

interface PublicRouteProps {
  children: ReactNode;
  restricted?: boolean;
}

export default function PublicRoute({ children, restricted }: PublicRouteProps) {
  const token = useSelector(selectToken);

  if (token && restricted) {
    return (
      <Navigate to="/" state={{ fromPage: window.location.pathname }} />
    );
  }

  return <>{children}</>;
}
