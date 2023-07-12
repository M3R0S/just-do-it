import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RequireRoleProps } from "./RequireRole.types";

import { getUserRoles } from "entities/User";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const RequireRole: FC<RequireRoleProps> = (props) => {
    const { children, roles } = props;

    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={PathRoutes.FORBIDDEN}
                replace
            />
        );
    }

    return children;
};
