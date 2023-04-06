import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./ArticlesSortedSelect.module.scss";
import { ArticlesSortedSelectProps } from "./ArticlesSortedSelect.types";

import { articlesSortedActions } from "features/ArticlesSorted/model/slice/articlesSortedSlice";
import {
    getArticlesSortedOrder,
    getArticlesSortedSort,
} from "features/ArticlesSorted/model/selectors/articlesSortedSelectors";
import { ArticleSortField } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { SortOrder } from "shared/lib/types/serverTypes";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Select, SelectOptions } from "shared/ui/Select";

export const ArticlesSortedSelect: FC<ArticlesSortedSelectProps> = memo((props) => {
    const { className, requestUpdate, returnToFirstPage } = props;

    const { t } = useTranslation("articlePage");
    const dispatch = useAppDispatch();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            { value: "asc", content: t("Ascending") },
            {
                value: "desc",
                content: t("Descending"),
            },
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            { value: "createdAt", content: t("Date of creation") },
            {
                value: "title",
                content: t("Name"),
            },
            {
                value: "views",
                content: t("Views"),
            },
        ],
        [t]
    );

    const sort = useSelector(getArticlesSortedSort);
    const order = useSelector(getArticlesSortedOrder);

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesSortedActions.setOrder(newOrder));
            returnToFirstPage();
            requestUpdate();
        },
        [dispatch, requestUpdate, returnToFirstPage]
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesSortedActions.setSort(newSort));
            returnToFirstPage();
            requestUpdate();
        },
        [dispatch, requestUpdate, returnToFirstPage]
    );

    return (
        <div className={cln(cl.articles_sorted_select, [className])}>
            <Select<ArticleSortField>
                label={t("Sorted in")}
                options={sortFieldOptions}
                value={sort}
                onChangeValue={onChangeSort}
            />
            <Select<SortOrder>
                label={t("in")}
                options={orderOptions}
                value={order}
                onChangeValue={onChangeOrder}
            />
        </div>
    );
});