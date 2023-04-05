import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ArticleListItem.module.scss";
import { ArticleListItemProps } from "./ArticleListItem.types";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";

import { ArticleBlockText as ArticleBlockTextType } from "entities/Article/model/types/article";
import ViewSvg from "shared/assets/svg/eye.svg";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";
import { Svg } from "shared/ui/Svg";
import { Card } from "shared/ui/Card";
import { Avatar } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation("articlePage");

    const textBlockNull = t("A short description is not available");
    const textBlock =
        (article.blocks.find((block) => block.type === "TEXT") as
            | ArticleBlockTextType
            | undefined) ?? textBlockNull;
    const Types = <Text className={cl.types}>{article.type.join(", ")}</Text>;
    const Title = (
        <Text
            isTitle
            tag="h1"
            className={cl.title}
        >
            {article.title}
        </Text>
    );
    const Views = (
        <div className={cl.views_wrapper}>
            <Text>{article.views}</Text>
            <Svg Svg={ViewSvg} />
        </div>
    );
    const MainImg = (
        <img
            src={article.img}
            alt={article.title}
            className={cl.img}
        />
    );

    if (view === "list") {
        return (
            <div className={cln(cl.article_list_item, [className, cl[view]])}>
                <Card className={cl.card}>
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
                    {Title}
                    {Types}
                    {MainImg}
                    {typeof textBlock === "string" ? (
                        textBlockNull
                    ) : (
                        <ArticleBlockText
                            block={textBlock}
                            className={cl.block_text}
                        />
                    )}
                    <div className={cl.footer}>
                        <AppLink to={PathRoutes.ARTICLE_DETAILS + article.id}>
                            <Button theme="outline">{t("Read more") + "..."}</Button>
                        </AppLink>
                        {Views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={PathRoutes.ARTICLE_DETAILS + article.id}
            className={cln(cl.article_list_item, [className, cl[view]])}
        >
            <Card>
                <div className={cl.image_wrapper}>
                    {MainImg}
                    <Text className={cl.created_at}>{article.createdAt}</Text>
                </div>
                <div className={cl.info_wrapper}>
                    {Types}
                    {Views}
                </div>
                {Title}
            </Card>
        </AppLink>
    );
});
