import { User } from "./user";

export interface UserSchema {
    authData?: User;

    _isInited: boolean;
}
