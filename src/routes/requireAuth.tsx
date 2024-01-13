import { FC } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

interface Props {
    allowedRoles?: any
}
export const RequireAuth: FC<Props> = ({ allowedRoles }) => {
    const auth = localStorage.getItem("role");
    const location = useLocation();

    return (
        allowedRoles?.includes(auth)
            ? <Outlet />
            : auth
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}