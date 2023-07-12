import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { RequireAuthProps } from "./RequireAuth.types";

import { getUserAuthData } from "entities/User";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const RequireAuth: FC<RequireAuthProps> = (props) => {
    const { children } = props;
    
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return (
            <Navigate
                to={PathRoutes.MAIN}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};
