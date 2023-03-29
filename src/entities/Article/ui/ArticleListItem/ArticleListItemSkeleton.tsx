import { FC, memo } from "react";

import cl from "./ArticleListItem.module.scss";
import { ArticleListItemSkeletonProps } from "./ArticleListItem.types";

import { cln } from "shared/lib/helpers/classNames";
import { Card } from "shared/ui/Card";
import { Skeleton } from "shared/ui/Skeleton";

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
    const { className, view } = props;

    if (view === "list") {
        return (
            <div className={cln(cl.article_list_item, [className, cl[view]])}>
                <Card className={cl.card}>
                    <div className={cl.header}>
                        <div className={cl.user}>
                            <Skeleton
                                width={30}
                                height={30}
                                borderRadius="50%"
                            />
                            <Skeleton
                                width={150}
                                height={16}
                            />
                        </div>
                        <Skeleton
                            width={150}
                            height={16}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={cl.title}
                    />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cl.types}
                    />
                    <Skeleton
                        height={400}
                        className={cl.img}
                    />
                    <Skeleton height={200} />
                    <div className={cl.footer}>
                        <Skeleton
                            width={100}
                            height={30}
                        />
                        <Skeleton
                            width={50}
                            height={20}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={cln(cl.article_list_item, [className, cl[view]])}>
            <Card>
                <div className={cl.image_wrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                    />
                </div>
                <div className={cl.info_wrapper}>
                    <Skeleton
                        width={130}
                        height={16}
                    />
                </div>
                <Skeleton
                    className={cl.title_skeleton}
                    width={150}
                    height={16}
                />
            </Card>
        </div>
    );
});
