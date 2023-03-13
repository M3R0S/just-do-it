import { FC, useEffect } from "react";

import cl from "./UserProfile.module.scss";
import { UserProfileProps } from "./UserProfile.types";

import {
    EditableProfileCard,
    fetchProfileData,
    profileReducer,
} from "features/EditableProfileCard";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";

const reducers: ReducersList = {
    profile: profileReducer,
};

export const UserProfile: FC<UserProfileProps> = (props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers: reducers });

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={cln(cl.user_profile, [className])}>
            <EditableProfileCard />
        </div>
    );
};
