import { FC, memo } from "react";

import cl from "./ProfilePage.module.scss";

import { UserProfile } from "widgets/UserProfile";

const ProfilePage: FC = memo(() => {
    return (
        <section className={cl.page}>
            <UserProfile />
        </section>
    );
});

export default ProfilePage;
