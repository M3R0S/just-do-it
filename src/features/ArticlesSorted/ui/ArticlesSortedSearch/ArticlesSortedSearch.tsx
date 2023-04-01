import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./ArticlesSortedSearch.module.scss";
import { ArticlesSortedSearchProps } from "./ArticlesSortedSearch.types";
import { articlesSortedActions } from "../../model/slice/articlesSortedSlice";
import { getArticlesSortedSearch } from "../../model/selectors/articlesSortedSelectors";

import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { Card } from "shared/ui/Card";
import { Input } from "shared/ui/Input";

export const ArticlesSortedSearch: FC<ArticlesSortedSearchProps> = memo((props) => {
    const { className, requestUpdate, returnToFirstPage } = props;

    const { t } = useTranslation("articlePage");
    const dispatch = useAppDispatch();

    const search = useSelector(getArticlesSortedSearch);

    const debounceRequestUpdate = useDebounce(requestUpdate, 500);

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            dispatch(articlesSortedActions.setSearch(newSearch));
            returnToFirstPage();
            debounceRequestUpdate();
        },
        [dispatch, debounceRequestUpdate, returnToFirstPage]
    );

    return (
        <Card className={cln(cl.articles_sorted_search, [className])}>
            <Input
                placeholder={t("Search")}
                value={search}
                onChangeValue={onChangeSearch}
                className={cl.input}
            />
        </Card>
    );
});
