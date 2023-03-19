import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./ArticleDetailsCommentsList.module.scss";
import { ArticleDetailsCommentsListProps } from "./ArticleDetailsCommentsList.types";
import { articleDetailsCommentsReducer } from "../../model/slice/articleDetailsCommentsSlice";
import {
    getArticleDetailsCommentsData,
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import { CommentList } from "entities/Comment";
import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Text } from "shared/ui/Text";

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsCommentsList: FC<ArticleDetailsCommentsListProps> = memo((props) => {
    const { className, id } = props;

    useDynamicReducerLoader({ reducers });
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleDetailsCommentsData.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const error = useSelector(getArticleDetailsCommentsError);

    const initialFetchCommentsByArticleId = useCallback(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [id, dispatch]);

    useInitialEffect(initialFetchCommentsByArticleId);

    return (
        <div className={cln(cl.article_details_comments_list, [className])}>
            <Text
                className={cl.comments_title}
                isTitle
                tag="h1"
            >
                {t("Comments")}
            </Text>
            <CommentList
                isLoading={isLoading}
                className={cl.comments_list}
                comments={comments}
            />
        </div>
    );
});
