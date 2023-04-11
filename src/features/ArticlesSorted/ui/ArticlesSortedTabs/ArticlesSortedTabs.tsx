import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./ArticlesSortedTabs.module.scss";
import { ArticlesSortedTabsProps } from "./ArticlesSortedTabs.types";
import { getArticlesSortedType } from "../../model/selectors/articlesSortedSelectors";
import { articlesSortedActions } from "../../model/slice/articlesSortedSlice";

import { ArticleType } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Tabs } from "shared/ui/Tabs";
import { TabItem } from "shared/ui/Tabs/Tabs.types";

export const ArticlesSortedTabs: FC<ArticlesSortedTabsProps> = memo((props) => {
    const { className, requestUpdate, returnToFirstPage } = props;

    const { t } = useTranslation("articlePage");
    const dispatch = useAppDispatch();

    const type = useSelector(getArticlesSortedType);

    const onChangeType = useCallback(
        (tab: TabItem<ArticleType>) => {
            dispatch(articlesSortedActions.setType(tab.value));
            returnToFirstPage();
            requestUpdate();
        },
        [dispatch, requestUpdate, returnToFirstPage]
    );

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: "ALL",
                content: t("All articles"),
            },
            {
                value: "IT",
                content: t("It"),
            },
            {
                value: "ECONOMICS",
                content: t("Economics"),
            },
            {
                value: "SCIENCE",
                content: t("Science"),
            },
        ],
        [t]
    );

    return (
        <Tabs<ArticleType>
            tabs={typeTabs}
            onTabClick={onChangeType}
            value={type}
            className={cln(cl.articles_sorted_tabs, [className])}
        />
    );
});
