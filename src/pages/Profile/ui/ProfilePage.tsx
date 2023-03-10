import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./ProfilePage.module.scss";

import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    ProfileCard,
    profileReducer,
} from "entities/Profile";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    useDynamicReducerLoader({ reducers: reducers });

    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={cl.profile_page}>
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
});

export default ProfilePage;
