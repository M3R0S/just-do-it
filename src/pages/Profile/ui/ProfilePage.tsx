import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ProfilePage.module.scss";

import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    useDynamicReducerLoader({ reducers: reducers });

    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={cl.profile_page}>
            <ProfileCard />
        </div>
    );
});

export default ProfilePage;
