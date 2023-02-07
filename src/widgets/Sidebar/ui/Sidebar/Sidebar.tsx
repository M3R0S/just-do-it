import { FC, useState } from "react";

import cl from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { cln } from "shared/lib";
import { useTranslation } from "react-i18next";

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t, i18n } = useTranslation();

    return (
        <div
            className={cln(cl.sidebar, [className], {
                [cl.collapsed]: collapsed,
            })}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <button
                    onClick={() => {
                        i18n.changeLanguage(
                            i18n.language === "ru" ? "en" : "ru"
                        );
                    }}
                >
                    {t("Translate")}
                </button>
            </div>
        </div>
    );
};
