import { FC, memo, Suspense, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { CommentsForArticleProps } from "./CommentsForArticle.types";
import { addNewCommentForArticle } from "../../model/services/addNewCommentForArticle/addNewCommentForArticle";
import { ArticleDetailsCommentsList } from "../ArticleDetailsCommentsList/ArticleDetailsCommentsList";

import { AddNewComment } from "features/AddNewComment";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text } from "shared/ui/Text";
import { VStack } from "shared/ui/Stack";

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
            <VStack
                rowGap="16"
                className={className}
            >
                <Text
                    isTitle
                    Tag="h1"
                >
                    {t("Comments")}
                </Text>
                <AddNewComment onSendComment={onSendComment} />
                <ArticleDetailsCommentsList id={id} />
            </VStack>
        </Suspense>
    );
});
