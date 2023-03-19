import { FC, memo } from "react";

import cl from "./CommentCardSkeleton.module.scss";
import { CommentCardSkeletonProps } from "./CommentCardSkeleton.types";

import { cln } from "shared/lib/helpers/classNames";
import { Skeleton } from "shared/ui/Skeleton";

export const CommentCardSkeleton: FC<CommentCardSkeletonProps> = memo((props) => {
    const { className } = props;

    return (
        <div className={cln(cl.comment_card_skeleton, [className])}>
            <div className={cl.header}>
                <Skeleton
                    width={30}
                    height={30}
                    borderRadius="50%"
                />
                <Skeleton
                    height={16}
                    width={100}
                />
            </div>
            <Skeleton
                width="100%"
                height={50}
            />
        </div>
    );
});
