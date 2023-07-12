import { ValueOf } from "shared/lib/types/helpersTypes";

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export const UserRole = {
    admin: "ADMIN",
    user: "USER",
    manager: "MANAGER",
} as const;
export type UserRole = ValueOf<typeof UserRole>;
