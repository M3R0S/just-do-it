import { FC, memo } from "react";

import cl from "./Tabs.module.scss";
import { TabsProps } from "./Tabs.types";
import { Card } from "../Card";

import { cln } from "shared/lib/helpers/classNames";

export const Tabs: FC<TabsProps> = memo((props) => {
    const { className, onTabClick, tabs, value } = props;

    return (
        <div className={cln(cl.tabs, [className])}>
            {tabs.map((tab) => (
                <Card>{tab.content}</Card>
            ))}
        </div>
    );
});
