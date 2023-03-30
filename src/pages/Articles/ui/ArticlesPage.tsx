import { FC, memo, useCallback } from "react";

import cl from "./ArticlesPage.module.scss";

import { ArticlesDisplay } from "widgets/ArticlesDisplay";
import { Page } from "widgets/Page";
import { fetchNextArticlePage } from "widgets/ArticlesDisplay/model/services/fetchNextArticlePage/fetchNextArticlePage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const ArticlesPage: FC = () => {
    const dispatch = useAppDispatch();

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <Page
            onScrollEnd={onLoadNextPage}
            className={cl.articles_page}
        >
            <ArticlesDisplay />
        </Page>
    );
};

export default memo(ArticlesPage);
