import { FC, memo, useState } from "react";

import cl from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";
import { sidebarLinksList } from "./Sidebar.constants";
import { SidebarLink } from "../SidebarLink/SidebarLink";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { cln } from "shared/lib/helpers/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";

export const Sidebar: FC<SidebarProps> = memo((props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);

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
                {sidebarLinksList.map((item) => (
                    <SidebarLink
                        item={item}
                        collapsed={collapsed}
                        key={item.id}
                    />
                ))}
            </nav>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
