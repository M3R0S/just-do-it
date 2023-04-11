import { FC, memo, Suspense, useCallback } from "react";
import { useTranslation } from "react-i18next";

import cl from "./CommentsForArticle.module.scss";
import { CommentsForArticleProps } from "./CommentsForArticle.types";
import { addNewCommentForArticle } from "../../model/services/addNewCommentForArticle/addNewCommentForArticle";
import { ArticleDetailsCommentsList } from "../ArticleDetailsCommentsList/ArticleDetailsCommentsList";

import { AddNewComment } from "features/AddNewComment";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text } from "shared/ui/Text";

export const CommentsForArticle: FC<CommentsForArticleProps> = memo((props) => {
    const { className, id } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addNewCommentForArticle(text));
        },
        [dispatch]
    );

    return (
        <Suspense fallback="">
            <div className={cln(cl.comments_for_article, [className])}>
                <Text
                    isTitle
                    tag="h1"
                    text={t("Comments")}
                />
                <AddNewComment onSendComment={onSendComment} />
                <ArticleDetailsCommentsList id={id} />
            </div>
        </Suspense>
    );
});
