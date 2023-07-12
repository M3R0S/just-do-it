export { userActions, userReducer } from "./model/slice/userSlice";

export { UserSchema } from "./model/types/UserSchema";
export { User, UserRole } from "./model/types/user";

export {
    getUserAuthData,
    getUserIsInited,
    getIsUserAdmin,
    getIsUserManager,
    getUserRoles
} from "./model/selectors/getUserSelectors";
