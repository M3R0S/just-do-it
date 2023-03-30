import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";

import cl from "./ArticleDetailsCommentsList.module.scss";
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
    articleDetailsCommentsReducer,
    getArticleDetailsCommentsData,
} from "../../model/slice/articleDetailsCommentsSlice";
import { ArticleDetailsCommentsListProps } from "./ArticleDetailsCommentsList.types";

import { CommentList } from "entities/Comment";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsCommentsList: FC<ArticleDetailsCommentsListProps> = memo((props) => {
    const { className, id } = props;

    useDynamicReducerLoader({ reducers });
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleDetailsCommentsData.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const error = useSelector(getArticleDetailsCommentsError);

    const initialFetchCommentsByArticleId = useCallback(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [id, dispatch]);

    useInitialEffect(initialFetchCommentsByArticleId);

    return (
        <CommentList
            isLoading={isLoading}
            className={cln(cl.comments_list, [className])}
            comments={comments}
        />
    );
});
