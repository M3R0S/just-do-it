import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ProfilePage.module.scss";

import { profileReducer } from "entities/Profile";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
    useDynamicReducerLoader({ reducers: reducers });
    const { t } = useTranslation("profilePage");

    return <div className={cl.profile_page}>{t("Profile Page")}</div>;
});

export default ProfilePage;
