import { FC, memo, useCallback } from "react";

import { ArticlesSortedProps } from "./ArticlesSorted.types";
import {
    articlesSortedActions,
    articlesSortedReducer,
} from "../../model/slice/articlesSortedSlice";
import { ArticlesSortedSelect } from "../ArticlesSortedSelect/ArticlesSortedSelect";
import { ArticlesViewSwitcher } from "../ArticlesViewSwitcher/ArticlesViewSwitcher";
import { ArticlesSortedSearch } from "../ArticlesSortedSearch/ArticlesSortedSearch";
import { ArticlesSortedTabs } from "../ArticlesSortedTabs/ArticlesSortedTabs";

import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { HStack, VStack } from "shared/ui/Stack";

const reducers: ReducersList = {
    articlesSorted: articlesSortedReducer,
};

export const ArticlesSorted: FC<ArticlesSortedProps> = memo((props) => {
    const { className, requestUpdate, returnToFirstPage } = props;

    useDynamicReducerLoader({ reducers, removeAfterUnmount: false });
    const dispatch = useAppDispatch();

    useInitialEffect(
        useCallback(() => {
            dispatch(articlesSortedActions.initState());
        }, [dispatch])
    );

    return (
        <VStack
            rowGap="16"
            className={className}
        >
            <HStack
                justifyContent="space_between"
                alignItems="center"
            >
                <ArticlesSortedSelect
                    returnToFirstPage={returnToFirstPage}
                    requestUpdate={requestUpdate}
                />
                <ArticlesViewSwitcher />
            </HStack>
            <ArticlesSortedSearch
                returnToFirstPage={returnToFirstPage}
                requestUpdate={requestUpdate}
            />
            <ArticlesSortedTabs
                requestUpdate={requestUpdate}
                returnToFirstPage={returnToFirstPage}
            />
        </VStack>
    );
});
