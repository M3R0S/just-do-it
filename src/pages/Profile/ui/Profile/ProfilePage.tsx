import { FC, memo } from "react";

import cl from "./ProfilePage.module.scss";

import { UserProfile } from "widgets/UserProfile";
import { Page } from "widgets/Page";

const ProfilePage: FC = memo(() => {
    return (
        <Page className={cl.page}>
            <UserProfile />
        </Page>
    );
});

export default ProfilePage;
