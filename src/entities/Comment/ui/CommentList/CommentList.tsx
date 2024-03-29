import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./CommentList.module.scss";
import { CommentListProps } from "./CommentList.types";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import { CommentCardSkeleton } from "../CommentCardSkeleton/CommentCardSkeleton";

import { cln } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    const renderCommentsList = (comment: Comment) => (
        <CommentCard
            key={comment.id}
            comment={comment}
        />
    );
    const renderCommentsSkeletonList = (comment: Comment) => (
        <CommentCardSkeleton key={comment.id} />
    );

    if (isLoading) {
        return (
            <div className={cln(cl.comment_list, [className])}>
                {comments?.map(renderCommentsSkeletonList)}
            </div>
        );
    }

    return (
        <div className={cln(cl.comment_list, [className])}>
            {comments?.length ? (
                comments?.map(renderCommentsList)
            ) : (
                <Text>{t("There are no comments")}</Text>
            )}
        </div>
    );
});
