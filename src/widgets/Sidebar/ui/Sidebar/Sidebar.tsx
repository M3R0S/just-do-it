import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import LinkAboutSvg from "shared/assets/svg/link_about.svg";
import LinkHomeSvg from "shared/assets/svg/link_home.svg";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers";
import {
    AppLink,
    AppLinkTheme,
    Button,
    ButtonSize,
    ButtonTheme,
} from "shared/ui";

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={cln(cl.sidebar, [className], {
                [cl.collapsed]: collapsed,
            })}
            data-testid="sidebar"
        >
            <Button
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cl.collapse_btn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                <span
                    className={cln(cl.collapse_btn_span, [], {
                        [cl.collapse_btn_span_animated]: collapsed,
                    })}
                >
                    {"<"}
                </span>
            </Button>
            <nav className={cl.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={PathRoutes.MAIN}
                    className={cl.link}
                >
                    <LinkHomeSvg className={cl.link_svg} />
                    <span className={cl.link_text}>{t("Main")}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={PathRoutes.ABOUT}
                    className={cl.link}
                >
                    <LinkAboutSvg className={cl.link_svg} />
                    <span className={cl.link_text}>{t("About us")}</span>
                </AppLink>
            </nav>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
