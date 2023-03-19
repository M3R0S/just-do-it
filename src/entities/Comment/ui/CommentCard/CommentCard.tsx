import { FC, memo } from "react";

import cl from "./CommentCard.module.scss";
import { CommentCardProps } from "./CommentCard.types";

import { cln } from "shared/lib/helpers/classNames";
import { Avatar } from "shared/ui/Avatar";
import { Text } from "shared/ui/Text";

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment } = props;

    return (
        <div className={cln(cl.comment_card, [className])}>
            <div className={cl.header}>
                <Avatar
                    width={30}
                    height={30}
                    src={comment.user.avatar}
                />
                <Text
                    isTitle
                    tag="h3"
                >
                    {comment.user.username}
                </Text>
            </div>
            <Text tag="p">{comment.text}</Text>
        </div>
    );
});
