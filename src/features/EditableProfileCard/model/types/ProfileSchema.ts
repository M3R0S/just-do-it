import { Profile } from "entities/Profile";

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    isReadonly: boolean;
    error?: string;
}
