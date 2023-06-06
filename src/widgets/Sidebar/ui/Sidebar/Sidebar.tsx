import { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import cl from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";
import { getSidebarItems } from "../../model/selectors/sidebarSelectors";
import { SidebarLink } from "../SidebarLink/SidebarLink";

import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { cln } from "shared/lib/helpers/classNames";
import { Button } from "shared/ui/Button";
import { VStack } from "shared/ui/Stack";

export const Sidebar: FC<SidebarProps> = memo((props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarLinksList = useSelector(getSidebarItems);

    const linksList = useMemo(
        () =>
            sidebarLinksList.map((item) => (
                <SidebarLink
                    item={item}
                    collapsed={collapsed}
                    key={item.id}
                />
            )),
        [collapsed, sidebarLinksList]
    );

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <VStack
            Tag="section"
            justifyContent="space_between"
            className={cln(cl.sidebar, [className], {
                [cl.collapsed]: collapsed,
            })}
            data-testid="sidebar"
        >
            <Button
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cl.collapse_btn}
                theme="background_inverted"
                square={true}
                size="l"
            >
                <span
                    className={cln(cl.collapse_btn_span, [], {
                        [cl.collapse_btn_span_animated]: collapsed,
                    })}
                >
                    {"<"}
                </span>
            </Button>
            <VStack
                rowGap="16"
                className={cl.links}
            >
                {linksList}
            </VStack>
            <VStack
                className={cl.switchers}
                alignItems="center"
                justifyContent="center"
                rowGap="16"
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </VStack>
        </VStack>
    );
});
