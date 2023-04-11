import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./SidebarLink.module.scss";
import { SidebarLinkProps } from "./SidebarLink.types";

import { getUserAuthData } from "entities/User";
import { cln } from "shared/lib/helpers/classNames";
import { AppLinkWrapper } from "shared/ui/AppLink";

export const SidebarLink: FC<SidebarLinkProps> = memo((props) => {
    const { item, collapsed } = props;

    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLinkWrapper
            theme={"primary_inverted"}
            to={item.path}
            className={cln(cl.link, [], { [cl.collapsed]: collapsed })}
        >
            <item.Icon className={cl.link_svg} />
            <span className={cl.link_text}>{t(item.text)}</span>
        </AppLinkWrapper>
    );
});
