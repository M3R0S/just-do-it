import { FC, memo } from "react";

import cl from "./ArticleListItem.module.scss";
import { ArticleListItemProps } from "./ArticleListItem.types";

import ViewSvg from "shared/assets/svg/eye.svg";
import { cln } from "shared/lib/helpers/classNames";
import { useHover } from "shared/lib/hooks/useHover";
import { Text } from "shared/ui/Text";
import { Svg } from "shared/ui/Svg";
import { Card } from "shared/ui/Card";
import { Avatar } from "shared/ui/Avatar";

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, view } = props;

    const [isHovered, bindHover] = useHover();

    const types = <Text className={cl.types}>{article.type.join(", ")}</Text>;
    const title = (
        <Text
            isTitle
            tag="h1"
            className={cl.title}
        >
            {article.title}
        </Text>
    );
    const views = (
        <div className={cl.views_wrapper}>
            <Text>{article.views}</Text>
            <Svg Svg={ViewSvg} />
        </div>
    );
    const mainImg = (
        <img
            width={200}
            height={200}
            src={article.img}
            alt={article.title}
            className={cl.img}
        />
    );

    if (view === "list") {
        return (
            <div className={cln(cl.article_list_item, [className, cl[view]])}>
                <Card>
                    <div className={cl.header}>
                        <div className={cl.user}>
                            <Avatar
                                width={30}
                                height={30}
                                src={article.user.avatar}
                            />
                            <Text tag="p">{article.user.username}</Text>
                        </div>
                        <Text tag="p">{article.createdAt}</Text>
                    </div>
                    {title}
                    {types}
                    {mainImg}
                </Card>
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={cln(cl.article_list_item, [className, cl[view]])}
        >
            <Card>
                <div className={cl.image_wrapper}>
                    {mainImg}
                    <Text className={cl.created_at}>{article.createdAt}</Text>
                </div>
                <div className={cl.info_wrapper}>
                    {types}
                    {views}
                </div>
                {title}
            </Card>
        </div>
    );
});
