import { UserRole } from "entities/User";

export interface RequireRoleProps {
    children: JSX.Element;
    roles?: UserRole[];
}
