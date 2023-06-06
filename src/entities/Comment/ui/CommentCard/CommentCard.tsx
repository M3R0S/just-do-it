import { FC, memo } from "react";

import cl from "./CommentCard.module.scss";
import { CommentCardProps } from "./CommentCard.types";

import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";
import { Avatar } from "shared/ui/Avatar";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/AppLink";

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment } = props;

    return (
        <div className={cln(cl.comment_card, [className])}>
            <AppLink
                to={`${PathRoutes.PROFILE}${comment.user.id}`}
                className={cl.header}
            >
                <Avatar
                    width={30}
                    height={30}
                    src={comment.user.avatar}
                />
                <Text
                    isTitle
                    Tag="h3"
                >
                    {comment.user.username}
                </Text>
            </AppLink>
            <Text Tag="p">{comment.text}</Text>
        </div>
    );
});
