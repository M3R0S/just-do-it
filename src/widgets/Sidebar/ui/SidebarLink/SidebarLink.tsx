import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./SidebarLink.module.scss";
import { SidebarLinkProps } from "./SidebarLink.types";

import { cln } from "shared/lib/helpers/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

export const SidebarLink: FC<SidebarLinkProps> = memo((props) => {
    const { item, collapsed } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY_INVERTED}
            to={item.path}
            className={cln(cl.link, [], { [cl.collapsed]: collapsed })}
        >
            <item.Icon className={cl.link_svg} />
            <span className={cl.link_text}>{t(item.text)}</span>
        </AppLink>
    );
});
