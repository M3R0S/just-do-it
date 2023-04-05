import { useCallback } from "react";

import cl from "./Tabs.module.scss";
import { TabItem, TabsProps } from "./Tabs.types";
import { Card } from "../Card";

import { cln } from "shared/lib/helpers/classNames";
import { genericMemo } from "shared/lib/helpers/genericMemo";

const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, onTabClick, tabs, value } = props;

    const onClickHandle = useCallback(
        (tab: TabItem<T>) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick]
    );

    return (
        <div className={cln(cl.tabs, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? "outline" : "normal"}
                    key={tab.value}
                    onClick={onClickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

export const MemoTabs = genericMemo(Tabs)